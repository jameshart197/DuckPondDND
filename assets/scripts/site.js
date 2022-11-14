import { fetchHeader, fetchFooter } from "./common.js";

const headerElement = document.getElementsByTagName("header")[0];
const footerElement = document.getElementsByTagName("footer")[0];

fetchHeader(headerElement);
fetchFooter(footerElement);