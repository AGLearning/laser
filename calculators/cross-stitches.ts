
import { CrossStitch } from '../model/cross-stitch';

export const crossStitches = () => {
    return [
      [3,4,5,9,10,11],
      [2,3,4,5,6,8,9,10,11,12],
      [1,2,3,4,5,6,7,8,9,10,11,12,13],
      [1,2,3,4,5,6,7,8,9,10,11,12,13],
      [1,2,3,4,5,6,7,8,9,10,11,12,13],
      [2,3,4,5,6,7,8,9,10,11,12],
      [3,4,5,6,7,8,9,10,11],
      [4,5,6,7,8,9,10],
      [5,6,7,8,9],
      [6,7,8],
      [7]
    ].flatMap((a, i) => a.map(x => new CrossStitch(x, i+1, CrossStitch.red)));

};