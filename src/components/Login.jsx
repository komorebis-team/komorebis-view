import React, {useState} from 'react'
import {css} from '@emotion/css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Navigate } from "react-router-dom";
import {useAuth} from "./Auth/AuthProvider";
import komorebiLogo from './Assets/Komorebi2.png';

const loginBackground = css`
  width: 100vw; 
  height: 100vh;
  display: flex; 
  flex-flow: row nowrap;
  align-items: center;
  box-sizing: border-box;
  padding: 2vw;
  
  background-color: #B5B5B5;
`

const loginImage = css`
  object-fit: contain;
  max-width: 50vw;
`

const komorebiHeader = css`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: x-large;
`

const komorebiLabel = css`
  display: inline-flex;
  align-items: center;
  margin-left: 2vw;
`

const formContainer = css`
  background: #EEEEEE;
  box-sizing: border-box;
  padding:2vw;
  min-width: 40vw;
  margin:2vw;
`

function redirectUser(user){
    if (user.role == null){
        return null
    }
    if (user.role === "admin"){
        return <Navigate to="/admin/search"/>
    }
    if (user.role === "agent"){
        return <Navigate to="/agent/search"/>
    }
}


export default function Login() {
    console.log("In Login component")
    let auth = useAuth();
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let redirection = redirectUser(auth.user)
    console.log(auth.user)
    if (redirection != null){
        return redirection;
    }

    function handleSubmit(auth, e){
        e.preventDefault();
        console.log("Executing handleSubmit")
        auth.signin(username, password);
    }

    return (
        <div className={loginBackground}>
            <img src= {komorebiLogo} className={loginImage} alt="Logo komorebi"/>

            <div className={formContainer}>
                <form onSubmit={e => handleSubmit(auth, e)}>
                    <Grid container direction="vertical" rowSpacing={4}>
                        <Grid item xs={12}>
                            <div className={komorebiHeader}>
                                <img src="https://via.placeholder.com/85x85.png"/>
                                <span className={komorebiLabel}> Komorebi Connect </span>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <p> Log In </p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                required
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </Grid>
                        <Grid item xs={4}/>
                        <Grid item xs={4}>
                            <Button variant="contained" fullWidth type="submit"> LOG IN </Button>
                        </Grid>
                        <Grid item xs={4}/>
                        {auth.user.triedLogin && <p> Your authentication data is incorrect. Try again. </p>}
                    </Grid>
                </form>
            </div>

        </div>
    );
}