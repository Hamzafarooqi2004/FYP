const express=require('express')
const { logInUser , signUpUser , forgetPassword} = require("../controller/userController")



const router=express.Router()

router.post('/login', logInUser)
router.post('/signup', signUpUser)
router.post('/forgetPassword', forgetPassword)

module.exports=router