import { Link } from "react-router-dom"

export const UserControls = () => {
    return (
        <>
            <div className="mx-4 sm:mx-40 mt-4">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <h1 className="text-mg sm:text-xl font-semibold my-2 text-green-500">Add Category</h1>
                <div className="flex items-center p-1 ">
                    <input className=" outline-none font-mono px-2 p-1 sm:p-2 rounded-l-lg bg-white" type="text" placeholder="category name" autoCorrect="false"/>
                    <button className="material-symbols-outlined bg-white px-2 p-1 sm:p-2 rounded-r-lg border-gray-600 border-l-2">add</button>
                </div>
            </div>
            <div className="mt-6 flex justify-evenly">
                
                {/* <Link className="bg-green-500 text-white text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-lg" to="/managecategory">Manage Category</Link> */}
                <Link className="bg-green-500 text-white text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-lg" to="/addexpense">Add Expense</Link>
                <Link className="bg-green-500 text-white text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-lg" to="/allexps">See all Expenses</Link>
            </div>
        </>
    )
}