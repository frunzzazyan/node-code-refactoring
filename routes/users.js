const express = require("express")
const router = express.Router()
const readUsers = require("../middleware/readUsers.js")
const checkBody = require("../middleware/checkBody.js")
const fs = require("fs")



router.get("/", readUsers, (req,res)=>{
    res.status(200).json(res.locals.users)
})

router.post("/", [checkBody,readUsers], (req,res)=>{
    console.log(res.locals)
    const {user,users} = res.locals
    users.push(user)
    fs.writeFileSync("./db/users.json" , JSON.stringify(users))
    res.status(201).json(user)
    res.send("ok")
})

module.exports = router