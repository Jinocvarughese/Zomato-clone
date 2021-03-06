//Importing env varaibles
require ("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurants";
import Food from "./API/Food";
import Image from "./API/image";
import Order from "./API/orders";
import Reviews from "./API/Reviews";

//Database connection (we can provide any name)
import ConnectDB from "./database/connection"; 

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);


zomato.get("/", (req,res) => res.json({ message: "setup success"}));

zomato.listen(4000, () => 
     ConnectDB().then(() => console.log("Server is Running")) 
.catch(() => 
     console.log("Server is running but the database failed"))
);