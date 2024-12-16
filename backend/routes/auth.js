const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "ayushisagoodb$oy";


// ROUTE 1:Create a user using POST "/api/auth/createuser", doesn't require authentication
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', "Enter a valid Email").isEmail(),
  body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 
  const salt = await bcrypt.genSalt(10);
  const secPass =  await bcrypt.hash(req.body.password, salt);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data = {
      user:{
        id:user.id
      }
    }
    const authToken = jwt.sign(data,JWT_SECRET)
    res.json({authToken});
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});




// ROUTE 2: Authenticate a user using POST "/api/auth/login", doesn't require authentication
router.post('/login', [
  body('email', "Enter a valid Email").isEmail(),
  body('password', "Password cannont be blank").exists(),
] , async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 

  const {email,password} = req.body
try {
   let user = await  User.findOne({email})
   if(!user){
    return res.status(400).json({error:"PLease login with correct credentials"})
   }
   let passCompare = await  bcrypt.compare(password,user.password)
   if(!passCompare){
    return res.status(400).json({error:"PLease login with correct credentials"})
   }

   const data = {
    user:{
      id:user.id
    }
  }
  const authToken = jwt.sign(data,JWT_SECRET)
  res.json({authToken});
} catch (error) {
  res.status(500).send({ error: 'Internal Server Error' });
}
})





// ROUTE 3: Get user details  using POST "/api/auth/getuser", Log in Required

router.post('/getuser', fetchuser , async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  }  catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
})


module.exports = router;