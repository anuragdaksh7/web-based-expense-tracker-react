const tHeadStyle = "text-white border-2 border-black p-2 py-3 hover:bg-[#b99dfa] transition duration-200";
const tRowStyle = "text-white font-semibold text-center hover:scale-x-105 border-b-2 border-black p-2 py-3 transition duration-200";
const tRow = "hover:scale-x-105 transition duration-200";
export const Recents = () => {
    return (
        <div className="flex justify-center mt-12">
            <div className="w-4/5">
                <h1 className="text-2xl font-bold text-center mb-6">Recently Added Transactions</h1>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className={tHeadStyle}>Date</th>
                            <th className={tHeadStyle}>Amount</th>
                            <th className={tHeadStyle}>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={tRow}>
                            <td className={tRowStyle}>2023-09-07</td>
                            <td className={tRowStyle}>500</td>
                            <td className={tRowStyle}>food</td>
                        </tr>
                        <tr className={tRow}>
                            <td className={tRowStyle}>2023-09-07</td>
                            <td className={tRowStyle}>500</td>
                            <td className={tRowStyle}>food</td>
                        </tr>
                        <tr className={tRow}>
                            <td className={tRowStyle}>2023-09-07</td>
                            <td className={tRowStyle}>500</td>
                            <td className={tRowStyle}>food</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}