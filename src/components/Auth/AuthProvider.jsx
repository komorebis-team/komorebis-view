import React from 'react';

import auth from '../auth'

let AuthContext = React.createContext(auth.user);

export function AuthProvider({children}) {
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
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}