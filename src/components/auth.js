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
        console.log("In Dummy login")
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
        console.log(auth.user)
        localStorage.setItem("user", JSON.stringify(auth.user))
        callback()
    },
}

export default auth;