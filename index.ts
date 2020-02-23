// Import stylesheets
import "./style.css";

import "./heart.ts";
import { SvgBuilder }  from "./svg-builder";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const svgBuilder = new SvgBuilder(100, 100, 1);
