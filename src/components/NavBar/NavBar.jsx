import React from 'react'

import {Link} from "react-router-dom";
import {css} from "@emotion/css";

import NavBarButton from "./NavBarButton";
import {useAuth} from "../Auth/AuthProvider";

const mainNavBar = (numOptions) => css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background-color: #2b3340;
  width: 5vw;
  height:92vh;
  max-height: 92vh;
  color: white;
  
  & .l{
    text-decoration: none; 
    color:white; 
  }

  & > div:first-child{
    height: ${(14*numOptions)}vh;
    max-height: 70vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  & > div:last-child{
    height: 10vh;
    max-height: 10vh;
  }
`

const roleButtonsMapping = {
    admin: {
        search: "Search",
        users: "Users",
        tags: "Tags",
        statistics: "Statistics",
        settings: "Settings"
    },
    agent: {
        search: "Search",
        record: "Record"
    }
}

export default function NavBar(){
    let auth=useAuth();
    let keys = Object.keys(roleButtonsMapping[auth.user.role])
    return (
        <nav className={mainNavBar(keys.length)}>
            <div>
                {
                    keys.map(key => {
                        return (
                            <Link to={"/" + auth.user.role + "/" + key} className="l">
                                <NavBarButton name={roleButtonsMapping[auth.user.role][key]}/>
                            </Link>
                        );
                    })
                }
            </div>
            <div>
                <NavBarButton name="Help"/>
            </div>
        </nav>
    );
}