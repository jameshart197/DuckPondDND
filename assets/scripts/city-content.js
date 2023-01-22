const mainElement = document.getElementsByTagName('main')[0];
const titleElement = document.getElementsByTagName('title')[0];
const cityIndex = document.getElementById('city-index');

let params = new URLSearchParams(window.location.search);
let worldtype = params.get('worldtype').toLowerCase();
let worldname = params.get('worldname').toLowerCase();
let cityname = params.get('cityname').toLowerCase();
let url=`/worlds/${worldtype}/${worldname}/cities/${cityname}.html`;

fetch(url).then((response)=> {
    return response.text();
}).then((html)=>{
    mainElement.innerHTML = html;
    titleElement.innerText = `${worldname} | ${cityname}`;
}).catch((err)=> {
    console.warn('Something went wrong.', err);
    mainElement.innerHTML = '';
})

cityIndex.href = `/worlds/${worldtype}/${worldname}/cities/index.html`