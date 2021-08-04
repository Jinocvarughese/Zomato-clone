//Libraries
import express from "express";
import passport from "passport";

//Database modal
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

/* 
Route   /restaurant
Des     get all the restaurant details based on city
Params  none
Access  Public
Method  GET
*/

Router.get("/", (req, res) => {
try {
    const { city } = req.query;  //another method with the use of ?
    const restaurant = await RestaurantModel.find({ city }); 

    return res.json({ restaurant });


} catch (error) {
     return res.status(500).json({ error: error.message });
}
});

/* 
Route   /
Des     get individual restaurant details based on id
Params  none
Access  Public
Method  GET
*/

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant) return res.status(404).json({ error: "Restaurant not found" });

        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route   /search
Des     get individual restaurant details based on search string
Params  none
Body    searchString
Access  Public
Method  GET
*/
Router.get("/search", async (req, res) => {
    try {
        const { searchString } = req.body;

        const restaurant = await RestaurantModel.find({ name: { $regex: searchString, $options: "i" }, //i - case insensitive
     });

     if(!restaurant) 

     if(!restaurant) return res.status(404).json({ error: `No Restaurant match with ${searchString}`});

     return res.json({ restaurant });

 }   catch (error) {

     return res.status(500).json({ error: error.message });
 }
});

export default Router;
