import React, { useState, useEffect, useContext } from "react";
import config from "./config.json";
import { titleContext } from "../../pages/auth/accounts/Feature";

const DemoSecondary = () => {

    const { setTitle } = useContext(titleContext);

    useEffect(() => {
        setTitle("Demo Secondary Feature");
        document.title = "Demo Secondary Feature";
    }, [setTitle]);

    return (
        <div>
            <h2>This is the secondary feature.</h2>
        </div>
        
    )
}

export default DemoSecondary;