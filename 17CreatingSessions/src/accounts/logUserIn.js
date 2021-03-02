import { createSession } from "./session.js"

export async function logUserIn(userId, request, reply) {
  const connectionInformation = {
    ip: request.ip,
    userAgent: request.headers["user-agent"],
  }
  // Create Session
  const sessionToken = await createSession(userId, connectionInformation)
  console.log("sessionToken", sessionToken)
  // Create JWT
  // Set Cookie
}
