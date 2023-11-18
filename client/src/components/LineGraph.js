import { useEffect, useState } from 'react';
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
    }
]

export const LineGraph = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    return (
        <div className='flex justify-center mt-12 pe-4 mb-8'>
            <LineChart className='2/3 text-sm text-green-600' width={Math.min(screenWidth -10, 800)} height={250} data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }} >
                <CartesianGrid strokeDasharray="3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="monthly expense" stroke="#16a34a" />
            </LineChart>
        </div>
    )
}