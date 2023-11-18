import { Link } from 'react-router-dom';


export const HeadComponentUnsiged = () => {

    return (
        <div className='px-4 sm:px-8 pt-4 border-b-2 pb-4 border-green-700 rounded-b-lg bg-[#111]'>
            <div className='flex justify-between items-center'>
                <Link to="/"><h1 className='text-3xl sm:text-6xl font-bold text-green-500'>BudGetAid</h1></Link>
                <div className='bg-green-600 px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-xl'>
                    <Link className='text-white pr-2 border-r-2 text-sm sm:text-lg' to="/login">
                        <button>LogIn</button>
                    </Link>
                    <Link className='text-white pl-2  text-sm sm:text-lg' to="/signup">
                        <button>SignUp</button>
                    </Link>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className="w-full rounded-b-lg shadow-lg bg-[#7446c6] px-20 pt-6 pb-6">
    //         <div className="flex justify-between items-center">
    //             <Link to="/"><h1 className="text-[#f5f5f5] text-6xl font-montserrat" >BUDGETAID</h1></Link>
    //             <div>
    //                 <Link to="/login"><button className="mx-6 bg-black text-white px-8 py-4 rounded-xl">Log In</button></Link>
    //                 <Link to="/signup"><button className="mx-6 bg-black text-white px-8 py-4 rounded-xl">SignUp</button></Link>
    //             </div>
    //         </div>
    //     </div>
    // )
}