import React, { useContext, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { titleContext } from "../../pages/auth/accounts/Feature";

const Demo = () => {
    let match = useRouteMatch();

    const { setTitle } = useContext(titleContext);

    useEffect(() => {
        setTitle("Demo Feature");
        document.title = "Demo Feature";
    }, [setTitle]);


    return (
        <div>
            <h2>This is the main feature.</h2>
        </div>

    )
}

export default Demo;