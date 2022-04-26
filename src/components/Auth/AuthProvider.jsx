import React from 'react';

import auth from '../auth'

let AuthContext = React.createContext(auth.user);

export function AuthProvider({children}) {
    console.log("Reached the Auth Provider function")
    console.log(AuthContext);
    console.log(auth.user)

    let initializeUser = () => JSON.parse(localStorage.getItem("user")) || auth.user
    let [user, setUser] = React.useState(initializeUser());

    let signin = (username, password) => {
        return auth.signin(username, password, () => {
            let newUser = JSON.parse(localStorage.getItem("user"))
            setUser(newUser);
        });
    };

    let signout = () => {
        return auth.signout(() => {
            setUser(initializeUser())
        })
    }

    let value = {user, signin, signout};
    console.log(value)

    console.log(children)
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    console.log("Reached the useAuth function")
    return React.useContext(AuthContext);
}

