//Libraries
import express from "express";
import passport from "passport";

//Database modal
import { OrderModel } from "../../database/allModels";

//validation
import { ValidateOrderId } from "../../validation/order";


const Router = express.Router();

/* 
Route   /
Des     get all the orders based on id
Params  _id
Access  Public
Method  GET
*/

Router.get("/:_id", async (req, res) => {
    try{
        await ValidateOrderId(req.params);

        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });

        if(!getOrders) {
            return res.status(404).json({ error: "user not found" });
        }

        return res.status(200).json({ orders: getOrders });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
Route   /
Des     add new order
Params  _id
Access  Public
Method  POST
*/

Router.post("/new/:_id", async (req, res) => {
    try {
         await ValidateOrderId(req.params);

        const { _id } = req.params;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id,
            },
            {
                $push: {orderDetails},
            },
            {new: true}
        );

        return res.json({ order: addNewOrder });

    } catch (error) {
        return res.status(500).json({ error: error.message });   
    }
});

export default Router;