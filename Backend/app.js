import express from "express";
import {config} from "dotenv";
import cors from "cors" ;
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

// write path of the config file in app to make it connect with the config file
config({ path: "./config.env"});     

// this is to see whether we are connected with config file 
console.log(process.env.PORT)

// app.use is used to write any of the middlewares and cors is used to connect frontend and backend
// after this step , we are connected with frontend
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],       
        methods: ['POST'],
        credentials: true,
    })
);

// to parse data into json format
app.use(express.json());                   
// to parse urlencoded data
app.use(express.urlencoded({extended:true}));

//to send email 
router.post('/send/mail' , async(req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return next (
            res.status(400).json({
                success : false ,
                message: "Please provide all details" ,
            })
        );
    }
    try {
        await sendEmail ({
            email: "tanishasolanki500@gmail.com" ,
            subject:"GYM WEBSITE CONTACT" ,
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message sent successfully.",
        })
    } catch (error) {
        res.status(500).json({
            success: false ,
            message: "Internal Server Error",
        });
    }
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
