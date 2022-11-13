const headerElement = document.getElementsByTagName("header")[0];
const footerElement = document.getElementsByTagName("footer")[0];

fetch("/assets/commoncontrols/header.html").then((response)=> {
    return response.text();
}).then((html)=> {
    headerElement.innerHTML = html;
}).catch((err)=> {
    console.warn('Something went wrong.', err);
    headerElement.innerHTML = '';
});

fetch("assets/commoncontrols/footer.html").then((response)=> {
    return response.text();
}).then((html)=> {
    footerElement.innerHTML = html;
}).catch((err)=> {
    console.warn('Something went wrong.', err);
    footerElement.innerHTML = '';
});
