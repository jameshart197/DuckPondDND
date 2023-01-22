const registerHoverMenuEvents = (hoverli, hovermenu, headertop)=> {
[...hoverli].forEach((li)=>li.addEventListener("mouseover", ()=> {
    hovermenu.style.display="block";
    
    const submenu=li.getAttribute("data-menu")+".html";
    fetch('/assets/hovermenus/'+submenu.toLowerCase()).then(function (response) {
        return response.text();
    }).then(function (html) {
        hovermenu.innerHTML = html;
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
        hovermenu.innerHTML = 'Error';
    });
}));
hovermenu.addEventListener("mouseleave",() =>hovermenu.style.display="none");
headertop.addEventListener("mouseenter",() =>hovermenu.style.display="none");
}

export{registerHoverMenuEvents};