const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.status(200).send("<h1>CRUD</h1>")
})

module.exports = router