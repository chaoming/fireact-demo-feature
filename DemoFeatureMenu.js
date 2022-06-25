import React from "react";
import { Link, useParams } from "react-router-dom";
import { ListItem, ListItemText, ListItemIcon, Divider, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';

const DemoFeaturMenu = () => {
    const { accountId } = useParams();

    return (
        <>
            <Link to={'/account/'+accountId+'/location'} style={{textDecoration:'none'}}>
                <ListItem button key="Users">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary={<Typography color="textPrimary">Location</Typography>} />
                </ListItem>
            </Link>
            <Link to={'/account/'+accountId+'/device'} style={{textDecoration:'none'}}>
                <ListItem button key="Billing">
                    <ListItemIcon><PaymentIcon /></ListItemIcon>
                    <ListItemText primary={<Typography color="textPrimary">Device</Typography>} />
                </ListItem>
            </Link>
            <Divider />
        </>
    )
}

export default DemoFeaturMenu;