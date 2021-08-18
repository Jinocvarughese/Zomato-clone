//Library
import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"; 
import passport from "passport";

//Models
import { UserModel } from "../../database/user";


//validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";


const Router = express.Router();

/* 
Route   /signup
Des     Signup/register with email and password
Params  none
Access  Public
Method  POST
*/

Router.post("/signup", async (request, response) => {



   try{ 

     await ValidateSignup(request.body.credentials);
      
     await UserModel.findByEmailAndPhone(request.body.credentials);
      
      //save to DB
     const newUser =  await UserModel.create(request.body.credentials);

      //generate JWT auth token
      const token = newUser.generateJwtToken();

      // return
      return response.status(200).json({ token, status: "Success" });

   }  catch (error) {
       return response.status(500).json({ error: error.message });
   }
});

/* 
Route   /signin
Des     Signin with email and password
Params  none
Access  Public
Method  POST
*/

Router.post("/signin", async (request, response) => {
    try{ 
       
       await ValidateSignin(request.body.credentials);
       
       const checkUserByEmail = await UserModel.findByEmailAndPassword(request.body.credentials);

       const token = checkUserByEmail.generateJwtToken();

       return response.status(200).json({ token, status: "Success" });
 
    }  catch (error) {
        return response.status(500).json({ error: error.message });
    }
 });

 /* 
Route   /google
Des     Google Signin
Params  none
Access  Public
Method  GET
*/

Router.get("/google", passport.authenticate("google", { 
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email" ] 
    }));

     /* 
Route   /google
Des     Google Signin Callback
Params  none
Access  Public
Method  GET
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}
), (req, res) => {
    return res.json({ token: req.session.passport.user.token });
}
);

export default Router;