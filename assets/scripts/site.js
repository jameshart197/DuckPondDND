import { fetchHeader, fetchFooter } from "/assets/scripts/common.js";

const headerElement = document.getElementsByTagName("header")[0];
const footerElement = document.getElementsByTagName("footer")[0];

fetchHeader(headerElement);
fetchFooter(footerElement);

var tiles = [...document.querySelectorAll(".tiled-list li")];
// tiles.forEach(li => li.addEventListener("click", e => window.location.href = e.currentTarget.dataset.linkUrl))
document.body.addEventListener("click", e => {
    if (e.target.closest('.tiled-list') && e.target.tagName === "LI"){
        window.location.href = e.target.dataset.linkUrl
    }
})