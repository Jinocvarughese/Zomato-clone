//Libraries
import express from "express";
import passport from "passport";

//Database modal
import { MenuModel, ImageModel } from "../../database/allModels";

//validation
import { ValidateMenuId } from "../../validation/menu";

const Router = express.Router();

/* 
Route   /
Des     get all list menu based on id
Params  _id
Access  Public
Method  GET
*/

Router.get("/list/:_id", async (req, res) => {
   try {
      await ValidateMenuId(req.params);

       const { _id } = req.params;
       const menus = await MenuModel.findOne(_id);

       return res.json({ menus });
   } catch (error) {
       return res.status(500).json({ error: error.message });
   }
});

/* 
Route   /image
Des     get all images based on id
Params  _id
Access  Public
Method  GET
*/

Router.get("/image/:_id", async(req, res) => {
     try {
        await ValidateMenuId(req.params);

        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
 
        return res.json({ menus });
     } catch (error) {
        return res.status(500).json({ error: error.message });
     }
});

export default Router;