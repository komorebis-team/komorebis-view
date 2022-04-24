import React from 'react'
import {Avatar} from "@mui/material";

export default function NavBarAvatar(props){
    return (
        <div className="NavBarAvatarContainer">
            <Avatar src={props.img}/>
            <div className="NavBarAvatarData">
                <span className="boldText"> {props.name} </span>
                <span className="lightText"> {props.role} </span>
            </div>
        </div>
    )
}