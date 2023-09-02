// import myImage from './imageAssets/bg-3.png';
import { Link } from "react-router-dom";
const inputStyle = "outline-none py-2 px-4 w-full";

export const LogInPage = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-8 w-1/3 px-8">
                <h1 className="mb-4 text-4xl font-semibold text-white text-center">BUDGETAID</h1>
                <form>
                    <input type="email" className={inputStyle} placeholder="Enter email..." name="emailBox"/><br></br>
                    <input type="password" className={inputStyle} placeholder="Enter password..." name="passwordBox"/><br></br>
                    <button type="submit">Log In</button>
                </form>
                <p>New User? <Link to="/signup">SignUP</Link></p>
            </div>
        </div>
    );
}