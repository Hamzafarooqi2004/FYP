const User = require("../models/userSchema")
// json web token
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

// creating own function in context of Json web token

const createToken=(_id)=>{
    return jwt.sign({_id: _id},process.env.JWTSECRET,{expiresIn:"1h"}) // 1h baically 60 min or 3600 seconds

}



const logInUser = async (req, res) => {
    const {email, password} = req.body
    //     console.log(password);
    try{
        const user=await User.logIn(email,password)

        // creating a token
        const token=createToken(user._id)

        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

}

const signUpUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
        console.log("HERE at the moment")
        const existingUser = await User.findOne({ email});
        console.log("HERE at the moment 2")
        
        if (existingUser) {
            // User already exists, return an error response
            return res.status(400).json({ error: "User already exists" });
        }

        // User does not exist, proceed with creating a new user
        const user = await User.signUp(email, password);
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const forgetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }
      console.log("HERE at the moment")
      // Hash the new password
      const saltValue = await bcrypt.genSalt(10);
//      console.log(saltValue)
      const hash = await bcrypt.hash(newPassword, saltValue);
    //   console.log(hash)
    //   console.log("HERE at the moment1")
      // Update the user's password with the hashed version
      user.password = hash;
      await user.save();
    //   console.log("HERE at the moment2")
  
      return res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {
    logInUser,
    signUpUser,
    forgetPassword

}