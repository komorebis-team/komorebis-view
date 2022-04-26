import React from 'react'

import {Avatar, Menu, MenuItem} from "@mui/material";
import {css} from '@emotion/css';
import {useAuth} from "../Auth/AuthProvider";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grid from "@mui/material/Grid";

const navBarAvatarContainer = css`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  
  & > .MuiAvatar-root{
    height: 5vh;
    width: 5vh;
  }
`

const navBarAvatarData = css`
  display: flex;
  flex-flow: column nowrap;
    
  & > span{
    margin: 0vw 0.6vw;
  }
    
  & > span:first-child{
    font-size: calc(13px + 0.3vw);
    font-weight: bold;
  }

  & > span:last-child {
    font-weight: lighter;
  }
`

export default function NavBarAvatar(){
    let auth = useAuth()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
            <div className={navBarAvatarContainer}>
                <Avatar src="https://via.placeholder.com/150"/>
                <div className={navBarAvatarData}>
                    <span> {auth.user.name + " " + auth.user.lastname} </span>
                    <span>
                        <Grid container>
                            <Grid item xs={6}> {auth.user.role} </Grid>
                            <Grid item xs={4}>
                                <Button sx={{height: '1.5vw', maxWidth:'1.5vw'}} onClick={handleClick}>
                                    <ArrowDropDownIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                    </span>
                    <Menu
                        id="logout_menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem key="logout-button" onClick={e => auth.signout()}> Log Out </MenuItem>
                    </Menu>
                </div>
            </div>
    )
}