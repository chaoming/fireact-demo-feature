import { Alert } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Loader from "../../components/Loader";
import config from "./config.json";
import VisitorAPI from "visitorapi";
import { titleContext } from "../../pages/auth/accounts/Feature";

const DemoDevice = () => {

    const projectId = config["visitor-api-project-id"];
    const [device, setDevice] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { setTitle } = useContext(titleContext);

    useEffect(() => {
        setTitle("Demo Device");
        document.title = "Demo Device";
    }, [setTitle]);


    useEffect(() => {
        VisitorAPI(
            projectId,
            (data) => {
                setDevice("Your browser is "+data.browser+" running on "+data.os+" in "+data.devieModel); // set country name
                setLoading(false); // set loading to false to disable <Loader />
            },
            ()=>{
                setError(true); // set error to true to display error alert
                setLoading(false); // set loading to false to disable <Loader />
            })
    },[projectId]);

    return (
        <>
            {loading?(
                <Loader />
            ):(
                <>
                    {error?(
                        <Alert severity="error">Oops, something went wrong!</Alert>
                    ):(
                        <div>You are from {device}.</div>
                    )}
                </>
            )}
        </>
        
    )
}

export default DemoDevice;