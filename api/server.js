const express = require("express")
const server = express()
const lotrRouter = require("./LOTR/lotr-router.js")

server.use(express.json())
server.use("/api/lotr", lotrRouter)
module.exports = server