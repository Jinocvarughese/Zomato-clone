//Libraries
import express from "express";
import passport from "passport";

//Database modal
import { UserModel } from "../../database/allModels";


//validation
import { ValidateUserId, ValidateUpdateId } from "../../validation/user";

const Router = express.Router();

/* 
Route   /:_id
Des     get user data
Params  _id
Body    none
Access  Public
Method  GET
*/

Router.get ("/:_id", async(req, res) => {
   try {
    await ValidateUserId(req.params);
    
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);

    return res.json({ user: getUser });

   } catch (error) {
    return res.status(500).json({ error: error.message }); 
   }
});

/* 
Route   /update/:userId
Des     update user id
Params  _id
Body    user data
Access  Public
Method  PUT
*/

Router.put("/update/:userId", async(req, res) => {
    try {
        await ValidateUpdateId(req.params, req.body);

        const { userId } = req.params;
        const { userData } = req.body;
        const updateUserData= await UserModel.findOneAndUpdate( 
         userId, 
           {
            $set: userData,
           }, 
           {
            new: true
           });

       return res.json({ user: updateUserData });

    } catch (error) {
        return res.status(500).json({ error: error.message }); 
    }
});

export default Router;

