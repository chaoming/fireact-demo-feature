import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Demo = () => {
    let match = useRouteMatch();

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