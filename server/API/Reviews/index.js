//Libraries
import express from "express";
import passport from "passport";

//Database modal
import { ReviewModel } from "../../database/allModels";


//validation
import { ValidateReviewId, ValidateNewReview } from "../../validation/review";

const Router = express.Router();

/* 
Route   /new
Des     add new food review or rating
Params  none
Body    review object
Access  Public
Method  GET
*/

Router.post("/new", async(req, res) => {
    try {
        await ValidateNewReview(req.body);

        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully Created Review" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route   /delete/:_id
Des     delete food review or rating
Params  _id
Body    none
Access  Public
Method  DELETE
*/

Router.delete("/delete/:_id", async(req,res) => {
    try {
         await ValidateReviewId(req.params);

         const { _id } = req.params;

         await ReviewModel.findByIdAndDelete( _id );

          return res.json({ review: "Successfully Deleted the Review" });
         
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;