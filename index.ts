// Import stylesheets
import "./style.css";

import "./heart.ts";
import { SvgBuilder }  from "./svg-builder";
import { Heart } from "./heart";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const shape = new Heart();
const svgBuilder = new SvgBuilder(20, 20, 4, 0.8).addPoints(shape.getPoints());
