// Filename - App.js

import React, { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
} from "recharts";

export const PieChartt = () => {
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
	// Sample data
	const data = [
		{ name: "Geeksforgees", students: 400 },
		{ name: "Technical   ", students: 700 },
		{ name: "Geek-i-knack", students: 200 },
		{ name: "Geek-i-knack", students: 300 },
		{ name: "Geek-i-knack", students: 600 },
		{ name: "Geek-i-knack", students: 200 },
		{ name: "Geek-o-mania", students: 100 },
	];

	return (
        <div className="flex justify-center mt-12 pe-4 mb-8">
            <BarChart width={Math.min(screenWidth -10, 800)} height={250} data={data}>
                <Bar dataKey="students" fill="#16a34a" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div>
	);
};

// export default PieChartt;
