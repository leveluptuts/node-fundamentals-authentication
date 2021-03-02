import bcrypt from "bcryptjs"

const { genSalt, hash } = bcrypt

export async function registerUser(email, password) {
  // generate salt
  const salt = await genSalt(10)

  // hash with salt
  const hashedPassword = await hash(password, salt)

  // Store in database

  // Return user from database
}
