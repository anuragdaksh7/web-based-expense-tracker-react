import { useEffect, useState } from "react";
import { HeadComp } from "../components/HeadComponent"
import Dropdown from 'react-dropdown';
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true;

const BASE = "http://localhost:5000/";
export const AddExp = () => {
    const [options,setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
    const [selectedOption, setSelectedOption] = useState(null);

    const jwtToken = Cookies.get("jwt");

    const onPageLoad = () => {
        axios.get(BASE+"getUser", {
            headers: {
                Cookie: jwtToken
            }
        })
        .then(response => {
            const data = response.data;
            const Ar = Array();
            for (let i = 0; i< data.length; i++){
                Ar.push(data[i].category);
            }
            console.log(Ar);
            setOptions(Ar);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        onPageLoad();
    }, [])

    const handleSelect = (option) => {
        setSelectedOption(option.value);
    };
    return (
        <>
            <HeadComp />
            <div className="flex justify-center mt-20  ">
                <div className=" border-2 px-4 w-full mx-4 sm:mx-0 sm:w-1/2 rounded-lg pb-6">
                    <h1 className="p-4 px-8 text-2xl font-semibold text-green-500 ">
                        Enter New Expense
                    </h1>
                    <div className="">
                        <div className=" block sm:flex justify-around">
                            <input className=" w-full sm:w-1/4 outline-none bg-[#444] h-fit py-2 px-4 my-2 sm:my-4 rounded-lg text-white" type="date" /><br />
                            <input className=" w-full sm:w-1/4 outline-none bg-[#444] h-fit py-2 px-4 my-2 sm:my-4 rounded-lg text-white" type="text" placeholder="Amount" />
                        </div>
                        <div className=" block sm:flex justify-around">
                            <Dropdown
                                options={options}
                                value={selectedOption}
                                onChange={(selected) => handleSelect(selected)}
                                placeholder="Select an option"
                                className="  w-full sm:w-1/4 outline-none bg-[#444] h-fit py-2 px-4 my-2 sm:my-4 rounded-lg text-white"
                            />
                            <input className=" w-full sm:w-1/4 outline-none bg-[#444] h-fit py-2 px-4 my-2 sm:my-4 rounded-lg text-white" type="text" placeholder="Note" />
                        </div>
                        <div className="flex justify-around">
                            <button className="px-4 py-2 bg-green-600 w-1/2 rounded-lg text-xl font-semibold text-white mt-4">
                                <Link to="/home" ><p className="w-full ">Save</p></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}