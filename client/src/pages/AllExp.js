import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true;
const tHeadStyle = "text-white border-2 border-black p-2 py-3 hover:bg-[#333] transition duration-200";
const tRowStyle = "text-white font-semibold text-center hover:scale-x-105 border-b-2 border-black p-2 py-3 transition duration-200";
const tRow = "hover:scale-x-105 transition duration-200";
const BASE = "http://localhost:5000/getUser";


export const AllExp = () => {
    const [Transactions,setTransactions] = useState(
        [
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
            {
                "date": "2023-10-15T00:00:00.000Z",
                "amount": 1000,
                "category": "Groceries",
                "note": "cssafsd"
            },
        ]
    );
    const jwtToken = Cookies.get("jwt");
    const onPageLoad = () => {
        axios.get(BASE, {
            headers: {
                
                Cookie: jwtToken
            }
        })
        .then(response => {
            console.log(response.data);
            setTransactions(response.data);
        })
        .catch(err => {
            console.error(err);
        });
    }
    useEffect(() => {
        onPageLoad();
    }, []);
    
    return(
        <div className="flex justify-center items-center mx-20 mt-10">
            <table className="w-full">
                    <thead>
                        <tr>
                            <th className={tHeadStyle}>Date</th>
                            <th className={tHeadStyle}>Amount</th>
                            <th className={tHeadStyle}>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Transactions.map(transaction => {
                                return (
                                <tr key={transaction.date+Math.random()} className={tRow}>
                                    <td className={tRowStyle}>{transaction.date.split("T")[0]}</td>
                                    <td className={tRowStyle}>{transaction.amount}</td>
                                    <td className={tRowStyle}>{transaction.category}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    )
}