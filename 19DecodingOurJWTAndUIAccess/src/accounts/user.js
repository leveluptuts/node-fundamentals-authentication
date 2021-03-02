import mongo from "mongodb"
import jwt from "jsonwebtoken"

const { ObjectId } = mongo

const JWTSignature = process.env.JWT_SIGNATURE

export async function getUserFromCookies(request) {
  try {
    const { user } = await import("../user/user.js")
    // Check to make sure access token exists
    if (request?.cookies?.accessToken) {
      // If access token
      const { accessToken } = request.cookies
      // Decode decode access token
      const decodedAccessToken = jwt.verify(accessToken, JWTSignature)
      // Return user from record
      return user.findOne({
        _id: ObjectId(decodedAccessToken?.userId),
      })
    }
    // Decode refresh token
    // Look up session
    // Confirm session is valid
    // if session is valid,
    // Look up current user
    // refresh tokens
    // Return current user
  } catch (e) {
    console.error(e)
  }
}

export async function refreshTokens() {
  try {
  } catch (e) {
    console.error(e)
  }
}
