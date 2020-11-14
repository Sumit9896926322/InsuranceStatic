const authstatus = document.querySelector(".authstatus");
const nav = document.querySelector(".nav");

window.onload = function (e) {
    let current_user = localStorage.getItem("cusername");
    if (current_user) {
        console.log(current_user);
        authstatus.innerText = current_user;
        const elem = document.createElement("li");
        elem.classList.add("nav-element");
        elem.classList.add("authbtn");
        elem.innerHTML = `
        <a class = "logout authstatus" href="./home.html"> Logout</a>
     </li>`;
        nav.appendChild(elem);


        elem.addEventListener("click", () => {
            nav.removeChild(elem);
            localStorage.removeItem("cusername");
            alert("logout");

        })
    }
}
