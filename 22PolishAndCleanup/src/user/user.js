import { client } from "../db.js"

export const user = client.db("test").collection("user")

user.createIndex({ "email.address": 1 })
