const navigator = document.querySelector(".navigator");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const menuButton = document.querySelector(".menu");
const pc = window.matchMedia("screen and (min-width: 320px)");

pc.addListener(validation);

function validation(event){
    if(event.matches){
        menuButton.addEventListener("click", showHide);
    }
    else{
        menuButton.removeEventListener("click", showHide);
    }
}

validation(pc);

function showHide(){
    if (navigator.classList.contains("is_active")){
        navigator.classList.remove("is_active");
        body.classList.remove("is_active");
        container.classList.remove("is_active");
        document.getElementById('menu_button').src = "../images/menu.svg";
    }
    else{
        navigator.classList.add("is_active");
        body.classList.add("is_active");
        container.classList.add("is_active");
        document.getElementById('menu_button').src = "../images/menu_active.svg";
    }
}
