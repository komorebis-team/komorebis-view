import React from 'react'

import {Navigate} from "react-router-dom";

import {useAuth} from "./AuthProvider";
import AuthError from "../Errors/AuthError";

export default function RequireAuth({children, role}) {
    let auth = useAuth();

    if (!auth.user.name) {
        return <Navigate to="/login"/>;
    }

    if(auth.user.role !== role){
        return (
            <AuthError/>
        )
    }

    return children;
}
