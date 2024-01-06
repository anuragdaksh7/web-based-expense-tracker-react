import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HeadComp } from "../components/HeadComponent";
import { MonthlyExp } from "../components/MonthlyExpenseOverview";
import { Recents } from "../components/Recents";
import { LineGraph } from "../components/LineGraph";
import { UserControls } from "../components/Controls";

export const Home = () => {

    const a = document.cookie.split(";");
// sourcery skip: avoid-function-declarations-in-blocks
    function check() {
    for (const cookie of a) {
            // eslint-disable-next-line no-unused-vars
            const [name, _tmp] = cookie.split("=");
            if (name === "jwt" || name === " jwt") {
                return true;
            }
        }
        return false
    }

    const navigate = useNavigate();
    useEffect(() => {
    if (!check()){
        navigate("/login");
    }
    });
    return <>
    
    <HeadComp />
    <UserControls />
    <MonthlyExp />
    <Recents />
    <LineGraph />
    </>;
};
