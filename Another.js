import React, { useState, useEffect, useContext } from "react";
import config from "./config.json";
import { titleContext } from "../../pages/auth/accounts/Feature";

const DemoAnother = () => {

    const { setTitle } = useContext(titleContext);

    useEffect(() => {
        setTitle("Demo Another Features");
        document.title = "Demo Another Feature";
    }, [setTitle]);

    return (
        <div>
            <h2>This is the another feature.</h2>
        </div>
        
    )
}

export default DemoAnother;