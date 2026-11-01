import { NextResponse } from "next/server"

const SYSTEM_PROMPT = `You are an AI Contact Form Guardian for Shwet's developer portfolio.
Your task is to analyze contact form submissions and decide whether they should be accepted or rejected.

ACCEPTANCE CRITERIA:
Accept ONLY messages that are:
- Professional business inquiries, hiring, contracts, partnerships, or job opportunities
- Technical questions or constructive queries about his projects, skills, or portfolio
- Genuine compliments, positive thoughts on his work, or polite appreciation
- Ethical, respectful, and constructive messages

REJECTION CRITERIA:
Reject ANY message that contains:
- Vulgarity, profanity, abusive or offensive language, sexual/explicit content, or hate speech
- Obfuscated profanity, sign language / leetspeak, disguised swear words (e.g., "bitch", "f**k", "a$$h@le", "b!tch", "f*ck", "sh!t", etc.)
- Personal attacks, insults, mockery, harassment, toxicity, or derogatory statements
- Casual chatting, random chit-chat, or non-professional messages (e.g., "hey bro what's up", "sup", "bored", "wyd")
- Negative, discouraging, trolling, or unsolicited spam

Return ONLY a valid JSON object with this exact structure:
{
  "approved": boolean,
  "reason": string
}
If rejected: explain politely and clearly in 1-2 concise sentences why the message was not accepted.
If approved: set reason to empty string "".`

// Secondary safety regex for immediate offensive pattern screening
const OFFENSIVE_REGEX = /\b(bitch|b!tch|b\*tch|f\*\*k|f\*ck|fuck|fuk|shit|sh!t|a\$\$h@le|asshole|a\*\*hole|bastard|dick|pussy|cunt|slut|whore)\b/i

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { approved: false, reason: "Please enter a message before submitting." },
        { status: 400 }
      )
    }

    // Fast heuristic screening for obvious profanity/vulgarity
    if (OFFENSIVE_REGEX.test(message)) {
      return NextResponse.json({
        approved: false,
        reason:
          "Your message contains prohibited language or inappropriate terms. Please keep your communication respectful and professional.",
      })
    }

    const groqApiKey = process.env.GROQ_API_KEY
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!groqApiKey) {
      console.warn("GROQ_API_KEY is not set in environment.")
      // If AI key is missing, proceed with basic sanity checks
      return NextResponse.json({
        approved: true,
        accessKey: web3FormsKey || "",
      })
    }

    // Call Groq AI Agent for intelligent review
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Sender: ${name || "Anonymous"} (${email || "No email"})\nMessage Content:\n"""\n${message.trim()}\n"""`,
          },
        ],
        response_format: { type: "json_object" },
        temperature: 0.1,
      }),
    })

    if (!groqResponse.ok) {
      const errText = await groqResponse.text()
      console.error("Groq API error:", errText)
      // On transient Groq error, don't block valid users completely unless flagged
      return NextResponse.json({
        approved: true,
        accessKey: web3FormsKey || "",
      })
    }

    const groqData = await groqResponse.json()
    const content = groqData.choices?.[0]?.message?.content

    if (!content) {
      return NextResponse.json({
        approved: true,
        accessKey: web3FormsKey || "",
      })
    }

    const reviewResult = JSON.parse(content) as {
      approved: boolean
      reason?: string
    }

    if (!reviewResult.approved) {
      return NextResponse.json({
        approved: false,
        reason:
          reviewResult.reason ||
          "This message does not meet professional communication guidelines. Please ensure your message is related to work, business, project inquiries, or constructive feedback.",
      })
    }

    // Message is approved! Safely provide the Web3Forms key to allow browser submission
    return NextResponse.json({
      approved: true,
      accessKey: web3FormsKey || "",
    })
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json(
      {
        approved: false,
        reason: "An unexpected error occurred while reviewing your message. Please try again.",
      },
      { status: 500 }
    )
  }
}
