require('dotenv').config();
const express = require("express");
app = express();
const hash = require("./createHash.js");;
const cookieParser = require("cookie-parser");
// const firebase = require("./firebase-sdkk.js");

const admin = require("firebase-admin");
const credentials = require("./budgetaid-517bb-firebase-adminsdk-k9xv7-283c757c12.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(process.env.PORT, ()=>{
    console.log(`listning on ${process.env.PORT}`);
});

app.post("/signup", async (req, res) => {
    
    const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        disabled: false
    });
    res.json(userResponse);
})

app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userRecord = await admin.auth().getUserByEmail(email);
        // Implement your password validation logic here, comparing input password with userRecord.passwordHash
        // ...
        // const resss = await (userRecord.passwordHash);
        console.log(userRecord);
        res.status(200).json({ message: 'User signed in successfully', user: userRecord });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error signing in' });
    }
});