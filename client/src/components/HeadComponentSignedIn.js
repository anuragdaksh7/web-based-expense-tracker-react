import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const HeadComponentSigned = () => {

    const a = document.cookie.split(";");
    function check() {
        for (const cookie of a) {
            const [name, _tmp] = cookie.split("=");
            if (name === "user" || name === " user") {
                return _tmp;
            }
        }
    }
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(check());
    });

    const LogOut = () => {

    }

    return (
        <div className="w-full rounded-b-lg shadow-lg bg-[#7446c6] px-20 pt-6 pb-6">
            <div className="flex justify-between items-center">
                <Link to="/"><h1 className="text-[#f5f5f5] text-6xl font-montserrat" >BUDGETAID</h1></Link>
                <p className="text-4xl font-bold text-white">Hello {user}!</p>
                <div>
                    <button onClick={LogOut} className="mx-6 bg-black text-white px-8 py-4 rounded-xl">Log Out</button>
                </div>
            </div>
        </div>
    )
}