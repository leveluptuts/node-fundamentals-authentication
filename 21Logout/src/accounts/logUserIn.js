import { createSession } from "./session.js"
import { createTokens } from "./tokens.js"

export async function logUserIn(userId, request, reply) {
  const connectionInformation = {
    ip: request.ip,
    userAgent: request.headers["user-agent"],
  }
  // Create Session
  const sessionToken = await createSession(userId, connectionInformation)
  console.log("sessionToken", sessionToken)

  // Create JWT
  const { accessToken, refreshToken } = await createTokens(sessionToken, userId)
  // Set Cookie
  const now = new Date()
  // Get date, 30 days in the future
  const refreshExpires = now.setDate(now.getDate() + 30)
  reply
    .setCookie("refreshToken", refreshToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      expires: refreshExpires,
    })
    .setCookie("accessToken", accessToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
    })
}
