import bcrypt from "bcryptjs"

const { genSalt, hash } = bcrypt

export async function registerUser(email, password) {
  const { user } = await import("../user/user.js")

  // generate salt
  const salt = await genSalt(10)

  // hash with salt
  const hashedPassword = await hash(password, salt)

  // Store in database
  const result = await user.insertOne({
    email: {
      address: email,
      verified: false,
    },
    password: hashedPassword,
  })
  // Return user from database
  return result.insertedId
}
