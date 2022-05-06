import axios from 'axios'

const miAuthURL = "http://localhost:8081/v1/users/"

const auth = {
    user: {
        name: "",
        lastname: "",
        username: "",
        role: "",
        triedLogin: false,
    },
    signin: (username, password, callback) => {
        // Dummy login. This should rather call our auth API.
        if (username === "admin" && password === "admin") {
            auth.user.name = "Diego"
            auth.user.lastname = "Urgell"
            auth.user.username = "dieji@hotmail.com"
            auth.user.role = "admin"
            auth.user.triedLogin = false;
        } else if (username === "agent" && password === "agent"){
            auth.user.name = "Agustín"
            auth.user.lastname = "Abreu"
            auth.user.username = "agus@hotmail.com"
            auth.user.role = "agent"
            auth.user.triedLogin = false;
        }
        else{
            auth.user.triedLogin = true;
            auth.user.name = ""
            auth.user.lastname = ""
            auth.user.username = ""
            auth.user.role = ""
        }
        /* This is used for login using axios. It is commented since we still dont have a remote server.
        else {

            axios.post(
                miAuthURL + "signin",
                {
                    username: username,
                    password: password
                }
            ).then(function (response) {
                console.log(response);
                axios.get(
                    miAuthURL + "profile",
                    {
                        headers: {Authorization: `Bearer ${response.data.token}`}
                    }
                ).then(function (response2) {
                        console.log(response2);
                        auth.user.triedLogin = false;
                        auth.user.name = response2.data.name;
                        auth.user.lastname = "";
                        auth.user.username = response2.data.name;
                        console.log(auth.user);
                        auth.user.role = response2.data.principal.role.toLowerCase();
                        console.log(auth.user);
                        localStorage.setItem("user", JSON.stringify(auth.user));
                        callback();
                    }
                )
            });
        }
        */
    },
    signout: (callback) => {
        auth.user.triedLogin = false;
        auth.user.name = ""
        auth.user.lastname = ""
        auth.user.username = ""
        auth.user.role = ""
        localStorage.removeItem("user")
        callback()
    }
}

export default auth;