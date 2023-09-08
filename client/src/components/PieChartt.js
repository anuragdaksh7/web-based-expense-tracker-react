import {Pie, PieChart} from "recharts";

const data01 = [
{
    name: "Group A",
    value: 400,
},
{
    name: "Group B",
    value: 300,
},
{
    name: "Group C",
    value: 300,
},
{
    name: "Group D",
    value: 200,
},
{
    name: "Group E",
    value: 278,
},
{
    name: "Group F",
    value: 189,
},
];


export const PieChartt = () => {
    const d2 = [];
    for (let i= 0; i< 3; i++){
        d2.push(data01[i]);
    }
return (
    <div className="flex justify-center">
        <PieChart width={730} height={250}>
            <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            />
        </PieChart>
    </div>
);
};
