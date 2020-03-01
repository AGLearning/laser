// Import stylesheets
import "./style.css";

import "./heart.ts";
import { SvgBuilder }  from "./svg-builder";
import { Heart } from "./heart";
import { CrochetCircle } from "./crochet-circle";

//HEART
//const shape = new Heart();
//const svgBuilder = new SvgBuilder(20, 20, 4, 0.8).addPoints(shape.getPoints());

const crochetCircle = new CrochetCircle().draw();