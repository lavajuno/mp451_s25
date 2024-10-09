function navbar_toggle() {
    const nav = document.querySelector("nav");
    if(nav.classList.contains("expanded")) {
        nav.classList.remove("expanded");
    } else {
        nav.classList.add("expanded");
    }
}

function navbar_close() {
    const nav = document.querySelector("nav");
    if(nav.classList.contains("expanded")) {
        nav.classList.remove("expanded");
    }
}
