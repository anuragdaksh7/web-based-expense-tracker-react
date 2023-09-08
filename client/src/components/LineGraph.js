import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
    {
    "name": "January",
    "uv": 4000,
    "monthly expense": 2400,
    "amt": 2400
    },
    {
    "name": "February",
    "uv": 3000,
    "monthly expense": 1398,
    "amt": 2210
    },
    {
    "name": "March",
    "uv": 2000,
    "monthly expense": 9800,
    "amt": 2290
    },
    {
    "name": "April",
    "uv": 2780,
    "monthly expense": 3908,
    "amt": 2000
    },
    {
    "name": "May",
    "uv": 1890,
    "monthly expense": 4800,
    "amt": 2181
    },
    {
    "name": "June",
    "uv": 2390,
    "monthly expense": 3800,
    "amt": 2500
    },
    {
    "name": "July",
    "uv": 3490,
    "monthly expense": 4300,
    "amt": 2100
    }
]

export const LineGraph = () => {
    return (
        <div className='flex justify-center mt-12'>
            <LineChart className='2/3' width={730} height={250} data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }} >
                <CartesianGrid strokeDasharray="3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="monthly expense" stroke="#000" />
            </LineChart>
        </div>
    )
}