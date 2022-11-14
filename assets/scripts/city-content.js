const mainElement = document.getElementsByTagName('main')[0];
const titleElement = document.getElementsByTagName('title')[0];

let params = new URLSearchParams(window.location.search);
let worldtype = params.get('worldtype');
let worldname = params.get('worldname');
let cityname = params.get('cityname');
let url=`/Worlds/${worldtype}/${worldname}/cities/${cityname}.html`;

fetch(url).then((response)=> {
    return response.text();
}).then((html)=>{
    mainElement.innerHTML = html;
    titleElement.innerText = `${worldname} | ${cityname}`;
}).catch((err)=> {
    console.warn('Something went wrong.', err);
    mainElement.innerHTML = '';
})
