const mainElement = document.getElementsByTagName('main')[0];
const url = "/assets/commoncontrols/wip.html"



fetch(url).then((response)=> {
    return response.text();
}).then((html)=>{
    mainElement.innerHTML = html;
}).catch((err)=> {
    console.warn('Something went wrong.', err);
    mainElement.innerHTML = '';
})
