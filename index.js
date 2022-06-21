import { Alert } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import Loader from "../../components/Loader";
import config from "./config.json";
import VisitorAPI from "visitorapi";
import { BreadcrumbContext } from "../../components/Breadcrumb";
import { AuthContext } from "../../components/FirebaseAuth";

const DemoHome = () => {
    const title = "Demo Home";
    const { userData } = useContext(AuthContext);
    const { setBreadcrumb } = useContext(BreadcrumbContext);

    const projectId = config["visitor-api-project-id"];
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setBreadcrumb([
            {
                to: "/",
                text: "Home",
                active: false
            },
            {
                to: "/account/"+userData.currentAccount.id+"/",
                text: userData.currentAccount.name,
                active: false
            },      
            {
                to: null,
                text: title,
                active: true
            }
        ]);
        VisitorAPI(
            projectId,
            (data) => {
                setCountry(data.countryName); // set country name
                setLoading(false); // set loading to false to disable <Loader />
            },
            ()=>{
                setError(true); // set error to true to display error alert
                setLoading(false); // set loading to false to disable <Loader />
            })
    },[projectId, userData, setBreadcrumb, title]);

    return (
        <>
            {loading?(
                <Loader />
            ):(
                <>
                    {error?(
                        <Alert severity="error">Oops, something went wrong!</Alert>
                    ):(
                        <div>You are from {country}.</div>
                    )}
                </>
            )}
        </>
        
    )
}

export default DemoHome;