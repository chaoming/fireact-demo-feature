import React from "react";
import { Link, useParams } from "react-router-dom";
import { ListItem, ListItemText, ListItemIcon, Divider, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

const FeaturMenu = () => {
    const { accountId } = useParams();

    return (
        <>
            <Link to={'/account/'+accountId+'/'} style={{textDecoration:'none'}}>
                <ListItem button key="Users">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={<Typography color="textPrimary">Main Feature</Typography>} />
                </ListItem>
            </Link>
            <Link to={'/account/'+accountId+'/secondary'} style={{textDecoration:'none'}}>
                <ListItem button key="Billing">
                    <ListItemIcon><AppsIcon /></ListItemIcon>
                    <ListItemText primary={<Typography color="textPrimary">Secondary Feature</Typography>} />
                </ListItem>
            </Link>
            <Link to={'/account/'+accountId+'/another'} style={{textDecoration:'none'}}>
                <ListItem button key="Billing">
                    <ListItemIcon><AutoAwesomeMosaicIcon /></ListItemIcon>
                    <ListItemText primary={<Typography color="textPrimary">Another Feature</Typography>} />
                </ListItem>
            </Link>
            <Divider />
        </>
    )
}

export default FeaturMenu;