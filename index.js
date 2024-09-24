const express = require('express')
const app = express()
const homeRouter = require("./routes/index.js")
const usersRouter = require("./routes/users.js")

app.use(express.json())
app.use("/", homeRouter)
app.use("/users", usersRouter)

app.use((req,res,next)=>{
    res.status(400).json({"msg" : "invalid url address"})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})