import React from 'react';

import auth from '../auth'

let AuthContext = React.createContext(auth.user);

export function AuthProvider({children}) {
    console.log("Reached the Auth Provider function")
    console.log(AuthContext);
    console.log(auth.user)

    let [user, setUser] = React.useState(JSON.parse(localStorage.getItem("user")) || auth.user);

    let signin = (username, password) => {
        return auth.signin(username, password, () => {
            console.log("Setting user in the provider state")
            let newUser = JSON.parse(localStorage.getItem("user"))
            setUser(newUser);
            console.log(user)
        });
    };

    let value = {user, signin};
    console.log(value)

    console.log(children)
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    console.log("Reached the useAuth function")
    return React.useContext(AuthContext);
}

