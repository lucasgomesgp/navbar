const back = document.getElementsByClassName("back-menu")[0];
const menu = document.getElementsByClassName("menu")[0];
const button = document.getElementsByClassName("button");
const user = document.getElementsByClassName("user-area")[0];
const h2 = document.getElementsByTagName("h2");
const icon = document.getElementsByClassName("icon");
const logout = document.getElementsByClassName("logout")[0];
const h1 = document.getElementsByTagName("h1")[0];

let toggleNavbarWidth = false;

back.onclick = (event) => {
    if (!toggleNavbarWidth) {
        menu.style.transition = "width 1s";
        menu.style.width = "8%";
        menu.style.position = "initial";
        user.style.display = "none";
        back.style.left = "12px";

        for (let i = 0; i < h2.length; i++) {
            h2[i].style.display = "none";

            if (i <= 4) {
                button[i].style.display = "initial";
                icon[i].style.borderRadius = "10px";
                icon[i].style.backgroundColor = "#7e79a5";
            }
            if (i == 5) {
                logout.style.positon = "unset";
                logout.style.width = "50px";
                icon[i].style.borderRadius = "10px";
                icon[i].style.backgroundColor = "#b70505";
            }
        }
        toggleNavbarWidth = true;

    } else {
        menu.style.width = "20%";
        menu.style.position = "fixed";
        setTimeout(() => {
            back.style.transition = "left 500ms";
            back.style.left = "4px";
            user.style.display = "flex";
            user.style.flexDirection = "column";
            user.style.alignItems = "center";

            for (let i = 0; i < h2.length; i++) {
                h2[i].style.display = "initial";
                icon[i].style.borderTopRightRadius = "0px";
                icon[i].style.borderBottomRightRadius = "0px";
                
                if (i <= 4) {
                    button[i].style.display = "flex";
                    button[i].style.width = "180px";
                    icon[i].style.backgroundColor = "#c4c4c4";
                }
                if (i == 5) {
                    logout.style.positon = "absolute";
                    logout.style.bottom = "0";
                    logout.style.width = "180px";
                    icon[i].style.backgroundColor = "#c4c4c4";
                }
            }
        }, 700)
        toggleNavbarWidth = false;
    }
}