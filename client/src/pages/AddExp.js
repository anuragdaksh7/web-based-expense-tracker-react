import { HeadComp } from "../components/HeadComponent"

export const AddExp = () => {
    return (
        <>
            <HeadComp />
            <div className="flex justify-center mt-20  ">
                <div className=" border-2 w-1/2 rounded-lg pb-6">
                    <h1 className="p-4 px-8 text-2xl font-semibold text-green-500 ">
                        Enter New Expense
                    </h1>
                    <div>
                        <div className="flex justify-around">
                            <input type="date" />
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}