//Library
import express from "express";
import jwt from "jsonwebtoken"; 

//Models
import { UserModel } from "../../database/user";


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
Route   /signup
Des     Signin with email and password
Params  none
Access  Public
Method  POST
*/

Router.post("/signin", async (request, response) => {
    try{ 
       
     const checkUserByEmail = await UserModel.findByEmailAndPassword(request.body.credentials);

       const token = checkUserByEmail.generateJwtToken();

       return response.status(200).json({ token, status: "Success" });
 
    }  catch (error) {
        return response.status(500).json({ error: error.message });
    }
 });


export default Router;