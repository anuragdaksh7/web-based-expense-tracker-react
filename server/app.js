require('dotenv').config();
const express = require("express");
const app = express();
const hash = require("./hash.js");
const PORT = process.env.PORT;
const db = require("./db/db.js");
const Register = require("./db/register.js");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth.js");
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: ["GET","POST"],
    credentials: true, // Allow credentials (cookies) to be sent with the request
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}... 
http://localhost:${PORT}`);
})


app.post("/signup", async (req, res) =>{
    try {
        const register = new Register({
            userName: req.body.username,
            email: req.body.email,
            password: hash(req.body.password),
        });

        const token = await register.generateAuthToken();

        res.cookie(
            "user",
            req.body.username,
            {
                httpOnly: false,
                secure: true
            }
        )

        res.cookie(
            "jwt",
            token, 
            {
                // expires: new Date(Date.now()+30000),
                httpOnly: false,
                secure: true
            }
        );
        // console.log(userCache);
        const u = new userCache({
            userEmail: req.body.email,
            Expenses: [{
                expense : {
                    date: new Date(),
                    amount: 0,
                    category: "Bills",
                    note: "a"
                }
            }],
            categories: [
                {category: "Bills"},
                {category: "Food"},
                {category: "Groceries"},
                {category: "Games"},
                {category: "Entertainment"},
                {category: "Sport"},
                {category: "Shopping"},
                {category: "Education"},
                {category: "Taxes"},
                {category: "Travel"},
                {category: "Subscriptions"}
            ]
        });u.save();
        const registered = await register.save();
        res.json({}).status(200);

    } catch (error) {
        res.status(400).send(error);
    }
});



app.post("/login", async(req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    try {
        console.log(req.body.email);
        const email = req.body.email;
        const password = hash(req.body.password);

        const userEmail = await Register.findOne({email: email});
        const token = await userEmail.generateAuthToken();

        res.cookie(
            "user",
            userEmail.userName,
            {
                httpOnly: false,
                secure: true
            }
        )

        res.cookie(
            "jwt",
            token, 
            {
                // expires: new Date(Date.now()+30000),
                httpOnly: false,
                secure: true
            }
        );
        // console.log(`cookie: ${req.cookies.jwt} `);
        if (userEmail.password === password){
            res.json({}).status(200);
        } else {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000').send("invalid creds");
        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

app.get("/some", (req, res)=>{
    console.log(req.user);
    res.send(req.user).status(200);
})