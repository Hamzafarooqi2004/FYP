const express=require('express')
const { logInUser , signUpUser} = require("../controller/userController")



const router=express.Router()

router.post('/login', logInUser)
router.post('/signup', signUpUser)

module.exports=router