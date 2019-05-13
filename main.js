import express from 'express'
import "./db/dbconfig"

let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())


//Register your Routes

import CatsController from "./controllers/CatsController";
server.use("/api/cats", new CatsController().router)

//Default Error Handler
server.use((error, req, res, next) => {
   res.status(error.status || 400).send({ error: { message: error.message } })
})

server
   .listen(5555, () => console.log("listening on 5555"))


