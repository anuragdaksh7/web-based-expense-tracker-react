import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const HeadComponentSigned = () => {

    const a = document.cookie.split(";");
// sourcery skip: avoid-function-declarations-in-blocks
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
        <div className='px-4 sm:px-8 pt-4 border-b-2 pb-4 border-green-700 rounded-b-lg bg-[#111]'>
            <div className='flex justify-between items-center'>
                <Link to="/"><h1 className='text-3xl sm:text-6xl font-bold text-green-500'>BudGetAid</h1></Link>
                <div className='bg-green-600 px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-xl'>
                    <Link className='text-white pr-2 text-sm sm:text-lg' to="/login">
                        <button>LogOut</button>
                    </Link>
                    {/* <Link className='text-white pl-2  text-sm sm:text-lg' to="/signup">
                        <button>SignUp</button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className="w-full rounded-b-lg shadow-lg bg-[#7446c6] px-20 pt-6 pb-6">
    //         <div className="flex justify-between items-center">
    //             <Link to="/"><h1 className="text-[#f5f5f5] text-6xl font-montserrat" >BUDGETAID</h1></Link>
    //             <p className="text-4xl font-bold text-white">Hello {user}!</p>
    //             <div>
    //                 <button onClick={LogOut} className="mx-6 bg-black text-white px-8 py-4 rounded-xl">Log Out</button>
    //             </div>
    //         </div>
    //     </div>
    // )
}