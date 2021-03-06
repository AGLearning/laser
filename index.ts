// Import stylesheets
import "./style.css";

import { SvgBuilder } from "./svg-builder";
import { Heart } from "./calculators/heart";
import { CrochetCircle } from "./calculators/crochet-circle";
import { CrossStitch } from "./model/cross-stitch";
import { circlesOnGrid } from "./calculators/circles-on-grid";
import { circlesOnCircle } from "./calculators/circles-on-circle";
import * as crossStitches from './calculators/cross-stitches';

//HEART
const shape = new Heart();
//const svgBuilder = new SvgBuilder(20 * 4, 20 * 4).addCircles(shape.getCircles());

// const crochetCircle = new CrochetCircle().draw();

// //https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_truck.SvgBuilder
// const truck = new SvgBuilder(10 * 4, 8 * 4).addCircles(
//   circlesOnGrid({ xCount: 8, yCount: 6 })
// );

// const crochetFlower1 = new SvgBuilder(2*40, 2*40).addCircles(
//   circlesOnCircle({ radius: 36, circlesNumber: 6, circleRadius: 12 })
// );
// const crochetFlower2 = new SvgBuilder(2*40, 2*40).addCircles(
//   circlesOnCircle({ radius: 12, circlesNumber: 18 })
// );

new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.hourglass()
);
new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.egg()
);
new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.flag()
);
new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.christmastree()
);
new SvgBuilder(2*100, 2*100).addCrossStitches(
  crossStitches.puchar()
);
new SvgBuilder(2*100, 2*100).addCrossStitches(
  crossStitches.heart()
);
new SvgBuilder(2*100, 2*100).addCrossStitches(
  crossStitches.flower()
);
new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.umbrella()
);
new SvgBuilder(2*100, 2*100).addCrossStitches(
  crossStitches.face()
);
new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.ladybug()
);
new SvgBuilder(2*120, 2*120).addCrossStitches(
  crossStitches.rubik()
);