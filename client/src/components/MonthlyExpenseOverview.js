const stylee = "mx-4 text-lg text-white font-semibold";



export const MonthlyExp = () => {
    return (
        <div className="flex justify-around mt-12 items-center">
                <h1 className="text-2xl font-bold">Monthly Expense Overview</h1>
                <div className="flex justify-between">
                    <p className={stylee}>Total Spending: 123</p>
                    <p className={stylee}>Average Spending: 123</p>
                </div>
        </div>
    )
}