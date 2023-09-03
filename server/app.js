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


app.use(cors());
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
            "jwt",
            token, 
            {
                expires: new Date(Date.now()+30000),
                httpOnly: true
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
        res.status(201).redirect("/home");

    } catch (error) {
        res.status(400).send(error);
    }
});



app.post("/login", async(req, res) => {
    console.log(req.body);
    console.log(req.body.email);
    try {
        
        const email = req.body.email;
        const password = hash(req.body.password);

        const userEmail = await Register.findOne({email: email});
        const token = await userEmail.generateAuthToken();
        res.cookie(
            "jwt",
            token, 
            {
                // expires: new Date(Date.now()+30000),
                httpOnly: true,
                // secure: true
            }
        );
        // console.log(`cookie: ${req.cookies.jwt}`);
        if (userEmail.password === password){
            res.send("success").status(200);
        } else {
            res.send("invalid creds");
        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});