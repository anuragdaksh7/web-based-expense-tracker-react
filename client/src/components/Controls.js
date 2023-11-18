import { Link } from "react-router-dom"

export const UserControls = () => {
    return (
        <div className="mt-6 flex justify-evenly">
            <Link className="bg-green-500 text-white text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-lg" to="/managecategory">Manage Category</Link>
            <Link className="bg-green-500 text-white text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-lg" to="/addexpense">Add Expense</Link>
            <Link className="bg-green-500 text-white text-xs sm:text-lg px-2 sm:px-4 py-2 rounded-lg" to="/allexps">See all Expenses</Link>
        </div>
    )
}