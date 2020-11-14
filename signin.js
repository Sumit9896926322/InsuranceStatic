const email = document.querySelector("#email");
const passwprd = document.querySelector("#password");
const signUp = document.querySelector(".signup");
const siginIn = document.querySelector(".signin");
const forme = document.querySelector(".contact-us");
const submit = document.querySelector(".submit-btn");
const submitContainer = document.querySelector(".submit-container");
const signinContainer = document.querySelector(".signin-container");
const signupContainer = document.querySelector(".signup-container");
const status = document.querySelector(".headline-2");
let mode = "signin";

signUp.addEventListener("click", (e) => {
    status.innerText = "Create your account now,Click Submit button after filing details";
    signupContainer.classList.add("active");
    submitContainer.classList.remove("active");
    signinContainer.classList.remove("active");
    mode = "signup";
    e.preventDefault();


    if (document.querySelector(".name") == null) {

        const elem = document.createElement("div");
        elem.classList.add("name");
        const content = ` 
    <label for="email">Your Name</label>
    <input type="text" id="name" name="Name" placeholder="Your Name..">  `;
        elem.innerHTML = content;
        forme.prepend(elem);
    }

});

siginIn.addEventListener("click", (e) => {
    status.innerText = "Login Now,Click Submit button after filing details";
    signinContainer.classList.add("active");
    signupContainer.classList.remove("active");
    submitContainer.classList.remove("active");

    mode = "signin";
    e.preventDefault();

    if (document.querySelector(".name") != null)
        forme.removeChild(forme.childNodes[0]);
})


submit.addEventListener("click", (e) => {
    signinContainer.classList.remove("active");
    signupContainer.classList.remove("active");
    submitContainer.classList.add("active");
    e.preventDefault();
    if (document.querySelector(".name") != null) {
        if (name.value == "" || email.value == "" || passwprd.value == "") {
            alert("Please fill the details completely");
            return;
        }
    }
    if (email.value == "" || password.value == "") {
        alert("Please fill the details completely");
        return;
    }
    if (mode == "signup") {
        const user = {
            name: document.querySelector("#name").value,
            email: email.value,
            password: passwprd.value,
        }
        console.log(user);

        let user_serialized = JSON.stringify(user);

        if (localStorage.getItem("users") != null) {

            let newuser = JSON.parse(localStorage.getItem("users"));
            newuser.push(user_serialized);
            localStorage.setItem("users", JSON.stringify(newuser));

        } else {
            let users = [];
            users.push(user_serialized);
            localStorage.setItem("users", JSON.stringify(users));
        }
    } else {
        console.log("Sign in");
        if (localStorage.getItem("users") != null) {
            let wronguser = true;
            let newuser = JSON.parse(localStorage.getItem("users"));
            newuser.map((user) => {
                user = JSON.parse(user);
                if (user.email == email.value && user.password == password.value) {
                    localStorage.setItem("cusername", user.name);
                    localStorage.setItem("cuseremail", user.email);

                    // alert("Logged In succesfully");
                    window.location.href = "home.html";
                    wronguser = false;
                }
            })
            if (wronguser)
                alert("Wrong credentials");

        } else {
            alert("No users,try to create one!..");
        }

    }
})