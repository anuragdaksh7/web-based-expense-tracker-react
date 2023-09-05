import { Link } from 'react-router-dom';


export const HeadComponentUnsiged = () => {
    return (
        <div className="w-full rounded-b-lg shadow-lg bg-[#7446c6] px-20 pt-6 pb-6">
            <div className="flex justify-between items-center">
                <Link to="/"><h1 className="text-[#f5f5f5] text-6xl font-montserrat" >BUDGETAID</h1></Link>
                <div>
                    <Link to="/login"><button className="mx-6 bg-black text-white px-8 py-4 rounded-xl">Log In</button></Link>
                    <Link to="/signup"><button className="mx-6 bg-black text-white px-8 py-4 rounded-xl">SignUp</button></Link>
                </div>
            </div>
        </div>
    )
}