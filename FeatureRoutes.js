import React from 'react';
import { Route, Switch, useParams } from "react-router-dom";
import Demo from '.';
import DemoAnother from './Another';
import DemoSecondary from './Secondary';


const FeatureRoutes = () => {
    const { accountId } = useParams();

    return (
        <Switch key="demo">
            <Route path={'/account/'+accountId+'/secondary'}>
                <DemoSecondary />
            </Route>
            <Route path={'/account/'+accountId+'/another'} >
                <DemoAnother />
            </Route>
            <Route>
                <Demo />
            </Route>
        </Switch>
    )
}

export default FeatureRoutes;