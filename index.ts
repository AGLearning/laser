// Import stylesheets
import "./style.css";

import { SvgBuilder } from "./svg-builder";
import { Heart } from "./calculators/heart";
import { CrochetCircle } from "./crochet-circle";
import { circlesOnGrid } from "./calculators/circles-on-grid";

//HEART
const shape = new Heart();
const svgBuilder = new SvgBuilder(20 * 4, 20 * 4).addCircles(shape.getCircles());

const crochetCircle = new CrochetCircle().draw();

//https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_truck.SvgBuilder
const truck = new SvgBuilder(10 * 4, 8 * 4).addCircles(
  circlesOnGrid({ xCount: 8, yCount: 6 })
);
