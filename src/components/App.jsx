import React from 'react'
import { css } from '@emotion/css'

import NavBarButton from "./NavBar/NavBarButton";
import NavBar from "./NavBar/NavBar";
import Header from './General/Header.jsx';
import { Link, Outlet } from "react-router-dom";

const appStyle = css`
    display: flex;
    flex-flow: row wrap;
    background-color: #EDEDED;
`

const contentContainer = css`
  & > div {
    width: 93vw;
    height: 92vh;
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
  }
  
  & .CenteredElement{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`

function App() {
  return (
      <div className={appStyle}>
          <Header/>
          <NavBar/>
          <div className={contentContainer}>
              <Outlet/>
          </div>
      </div>
  );
}

export default App;
