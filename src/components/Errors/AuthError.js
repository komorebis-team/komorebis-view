import React, {useEffect, useState} from 'react'
import {centeredElement} from "../../GlobalCSS";

import {css} from '@emotion/css'
import {Navigate} from "react-router-dom";
import {useAuth} from "../Auth/AuthProvider";

let errorStyle = css`
  width: 50vw; 
  height: 50vh;
  margin: 2vw; 
`


let hyperLink = css`
  text-decoration: blue underline;
  color: blue; 
`

export default function AuthError(){
    let [redirectTimer, setRedirectTimer] = useState(5)
    let auth = useAuth()
    let userRole = "agent" || auth.user || "agent" || auth.user.role || "agent"

    useEffect(() => {
        let redirectInterval = setInterval(() => {setRedirectTimer(redirectTimer - 1)}, 1000)
        return () => {clearInterval(redirectInterval)}
    })

    if (redirectTimer <= 0){
        return <Navigate to={"/" + userRole + "/search"}/>
    }

    return (
        <div className={errorStyle}>
            <p>
                Error while processing your request, you have not the necessary permissions. Sign out and then Log In with
                the appropriate credentials.
            </p>
            <p className={hyperLink}>
                Redirecting you to the search page in {redirectTimer}
            </p>
        </div>
    )
}