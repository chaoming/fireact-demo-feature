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
            <div>This is a demo</div>
            <ul>
                <li><Link to={`${match.url}location`} >Location</Link></li>
                <li><Link to={`${match.url}device`} >Device</Link></li>
            </ul>
        </div>

    )
}

export default Demo;