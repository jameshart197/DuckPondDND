const hoverli = document.getElementsByClassName("hover-li");
const hovermenu = document.getElementById("hover-menu");

[...hoverli].forEach((li)=>li.addEventListener("mouseover", ()=>hovermenu.style.display="block"));
hovermenu.addEventListener("mouseout", ()=>hovermenu.style.display="none");
