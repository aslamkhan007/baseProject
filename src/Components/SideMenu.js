import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyle= makeStyles({
    sideMenu:{
display: "flex",
flexDirection:"column",
position:"absolute",
left:"0px",
height:"100%",
width:"320px",
backgroundColor:"#253053"

    }


})


export default function SideMenu() {
    const classes= useStyle();
    console.log(classes); 
    return (
        
        <div className={classes.sideMenu}>
            
        </div>
    )
}
