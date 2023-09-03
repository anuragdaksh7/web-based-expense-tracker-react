// import myImage from './imageAssets/bg-3.png';
import { useState } from "react";
import { Link } from "react-router-dom";
const inputStyle = "outline-none py-1 px-2 w-full mb-4 rounded-md";



export const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginFunc = () => {
        // console.log(email, password);
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            // Add any other headers if needed
            },
            body: JSON.stringify({"email": email, "password": password}), // Convert the request body to JSON format
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response body as JSON
            })
            .then(data => {
            // Handle the JSON data returned from the server
            console.log(data);
            })
            .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
            });
    }

    return (
        <div className="flex justify-center">
            <div className="mt-8 w-1/3 px-8">
                <h1 className="mb-4 text-4xl font-semibold text-white text-center">BUDGETAID</h1>
                <div className="shadow-xl p-8  rounded-xl bg-[#ab87ff]">
                    <h1 className="text-xl font-semibold text-white mb-4">Sign in to your account</h1>
                    <p className="mb-1 mt-1 font-semibold text-white text-sm">Your email</p>
                    <input type="email" className={inputStyle} placeholder="name@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/><br></br>
                    <p className="mb-1 mt-1 font-semibold text-white text-sm">Password</p>
                    <input type="password" className={inputStyle} placeholder="Enter password..." value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/><br></br>
                    <button onClick={loginFunc} className="w-full mb-4 bg-blue-600 mt-4 py-2 rounded-xl font-bold font-montserrat text-white text-2xl" >Log In</button>
                    <p className="text-sm">Don't have an account yet? <Link className="text-blue-800" to="/signup">SignUP</Link></p>
                </div>
                
            </div>
        </div>
    );
}