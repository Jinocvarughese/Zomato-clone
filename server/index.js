//Importing env varaibles
require ("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//microservice routes
import Auth from "./API/Auth";

//Database connection (we can provide any name)
import ConnectDB from "./database/connection"; 

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//Application Routes
zomato.use("/auth", Auth);


zomato.get("/", (req,res) => res.json({ message: "setup success"}));

zomato.listen(4000, () => 
     ConnectDB().then(() => console.log("Server is Running")) 
.catch(() => 
     console.log("Server is running but the database failed"))
);