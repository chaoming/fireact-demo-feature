import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Demo from '.';
import DemoDevice from './Device';
import DemoLocation from './Location';


const DemoFeatureRoutes = () => {
    let match = useRouteMatch();

    return (
        <Switch key="demo">
            <Route path={`${match.path.replace(":path?", "location")}`} >
                <DemoLocation />
            </Route>
            <Route path={`${match.path.replace(":path?", "device")}`} >
                <DemoDevice />
            </Route>
            <Route>
                <Demo />
            </Route>
        </Switch>
    )
}

export default DemoFeatureRoutes;