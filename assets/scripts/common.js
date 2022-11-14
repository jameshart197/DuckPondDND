import { registerHoverMenuEvents } from "/assets/scripts/hovermenus.js";

const fetchHeader = (headerElement) => {
    fetch("/assets/commoncontrols/header.html").then((response)=> {
        return response.text();
    }).then((html)=> {
        headerElement.innerHTML = html;
        const hoverli = document.getElementsByClassName("hover-li");
        const hovermenu = document.getElementById("hover-menu");
        const headertop = document.getElementsByClassName("header-top")[0];
        registerHoverMenuEvents(hoverli, hovermenu, headertop);
    }).catch((err)=> {
        console.warn('Something went wrong.', err);
        headerElement.innerHTML = '';
    });
};

const fetchFooter = (footerElement) => {
    fetch("/assets/commoncontrols/footer.html").then((response)=> {
        return response.text();
    }).then((html)=> {
        footerElement.innerHTML = html;
    }).catch((err)=> {
        console.warn('Something went wrong.', err);
        footerElement.innerHTML = '';
    });
};

export {fetchHeader, fetchFooter};