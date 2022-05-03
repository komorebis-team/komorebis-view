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
        axios.post(
            miAuthURL+"signin",
            {
                username: username,
                password: password
            }
        ).then( function (response){
            console.log(response);
            axios.get(
                miAuthURL+"profile",
                {
                    headers: { Authorization: `Bearer ${response.data.token}` }
                }
            ).then( function(response2){
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