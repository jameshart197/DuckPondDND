import { fetchHeader, fetchFooter } from "assets/scripts/common.js";

const headerElement = document.getElementsByTagName("header")[0];
const footerElement = document.getElementsByTagName("footer")[0];

fetchHeader(headerElement);
fetchFooter(footerElement);