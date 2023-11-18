import { useEffect } from 'react';
import { useState } from 'react';
import { HeadComponentSigned } from './HeadComponentSignedIn';
import { HeadComponentUnsiged } from './HeadComponentUnsigned';



export const HeadComp = () => {
    const [log, setLog] = useState(false);

    const a = document.cookie.split(";");

    // sourcery skip: avoid-function-declarations-in-blocks
    function check() {
        for (const cookie of a) {
            const [name, _tmp] = cookie.split("=");
            if (name === "jwt" || name === " jwt") {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        
        console.log(check());
        if (check()){
            
            setLog(true);
        }
    }, [location.href]);
    if (!log){
        return <HeadComponentUnsiged />
    }
    return <HeadComponentSigned />
}