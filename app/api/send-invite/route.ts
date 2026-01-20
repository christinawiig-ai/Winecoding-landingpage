import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const interestsText =
      Array.isArray(data.interests) && data.interests.length > 0
        ? data.interests.map((i: string) => `• ${i}`).join("\n")
        : "• None selected"

    const emailContent = `
New Wine Coding Invite Request!

NAME: ${data.name}
EMAIL: ${data.email}
LINKEDIN: ${data.linkedin || "Not provided"}

CODING EXPERIENCE: ${data.codingExperience}

WHAT BRINGS THEM HERE:
${interestsText}

HOW THEY HEARD ABOUT US:
• ${data.referralSource}
${data.referralOther ? `• Other: ${data.referralOther}` : ""}

ADDITIONAL NOTES:
${data.reason || "None"}
    `.trim()

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Wine Coding <noreply@resend.dev>",
        to: ["christina@startuplab.no", "harrshinny@startuplab.no"],
        subject: `New Wine Coding Request: ${data.name}`,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending invite request:", error)
    return NextResponse.json({ success: false, error: "Failed to send request" }, { status: 500 })
  }
}
