import { HeadComp } from "../components/HeadComponent"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const inputStyle = "outline-none py-1 px-2 w-full mb-4 rounded-md";


export const SignUpPage = () => {

    
    Cookies.remove('jwt');
    Cookies.remove('user');
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const signupFunc = () => {
        fetch("http://localhost:5000/signup", {
            method: "POST",credentials: "include",
            headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "username": userName, 
            "email": email, 
            "password": password
        })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("sign up successful");
            console.log(data);
            navigate('/home');
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            
            <HeadComp />

            <div className="flex justify-center">
                <div className="mt-8 w-1/3 px-8">
                    <h1 className="mb-4 text-4xl font-semibold text-white text-center">BUDGETAID</h1>
                    <div className="shadow-xl p-8  rounded-xl bg-[#ab87ff]">
                        <h1 className="text-xl font-semibold text-white mb-4">Sign in to your account</h1>
                        <p className="mb-1 mt-1 font-semibold text-white text-sm">Your Username</p>
                        <input type="email" className={inputStyle} placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} name="username"/><br></br>
                        <p className="mb-1 mt-1 font-semibold text-white text-sm">Your email</p>
                        <input type="email" className={inputStyle} placeholder="name@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/><br></br>
                        <p className="mb-1 mt-1 font-semibold text-white text-sm">Password</p>
                        <input type="password" className={inputStyle} placeholder="Enter password..." value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/><br></br>
                        <button onClick={signupFunc} className="w-full mb-4 bg-blue-600 mt-4 py-2 rounded-xl font-bold font-montserrat text-white text-2xl" >Log In</button>
                        <p className="text-sm">Don't have an account yet? <Link className="text-blue-800" to="/signup">SignUP</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}