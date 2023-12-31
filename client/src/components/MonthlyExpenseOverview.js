import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const stylee = "mx-0 sm:mx-4 text-lg text-white font-semibold";



export const MonthlyExp = () => {
    const a = document.cookie.split(";");
    // sourcery skip: avoid-function-declarations-in-blocks
    function check() {
    for (const cookie of a) {
            // eslint-disable-next-line no-unused-vars
            const [name, _tmp] = cookie.split("=");
            if (name === "jwt" || name === " jwt") {
                return true;
            }
        }
        return false
    }

    const navigate = useNavigate();
    useEffect(() => {
    if (!check()){
        navigate("/login");
    }
    });
    return (
        <div className="block sm:flex justify-around mt-4 items-center mx-4">
                <h1 className="text-lg sm:text-2xl text-green-500 font-bold">Monthly Expense Overview</h1>
                <div className="block sm:flex justify-between">
                    <p className={stylee}>Total Spending: 123</p>
                    <p className={stylee}>Average Spending: 123</p>
                </div>
        </div>
    )
}