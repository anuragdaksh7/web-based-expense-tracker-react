import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HeadComp } from "../components/HeadComponent";


export const Home = () => {

    const a = document.cookie.split(";");
    function check() {
    for (const cookie of a) {
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
    <h1>home</h1>
    </>;
};
