const hoverli = document.getElementsByClassName("hover-li");
const hovermenu = document.getElementById("hover-menu");

[...hoverli].forEach((li)=>li.addEventListener("mouseover", ()=> {
    hovermenu.style.display="block";
    
    const submenu=li.getAttribute("data-menu")+".html";
    fetch('/assets/HoverMenus/'+submenu).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        hovermenu.innerHTML = html;
        //console.log(html);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
        hovermenu.innerHTML = 'Error';
    });

}));
hovermenu.addEventListener("mouseleave",() =>hovermenu.style.display="none");
