
import { CrossStitch } from '../model/cross-stitch';

export const heart = () => {
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

export const flower = () => {
    const petals = [
      [7],
      [6,7,8],
      [3,4,6,7,8,10,11],
      [3,4,5,7,9,10,11],
      [4,5,9,10],
      [2,3,11,12],
      [1,2,3,4,10,11,12,13],
      [2,3,11,12],
      [4,5,9,10],
      [3,4,5,7,9,10,11],
      [3,4,6,7,8,10,11],
      [6,7,8],
      [7]
    ].flatMap((a, i) => a.map(x => new CrossStitch(x, i+1, CrossStitch.blue)));

    const middle = [
      [],
      [],
      [],
      [],
      [],
      [6,7,8],
      [6,7,8],
      [6,7,8]
    ].flatMap((a, i) => a.map(x => new CrossStitch(x, i+1, CrossStitch.yellow)));

    return petals.concat(middle);
};

export const umbrella = () => {
    const red = [
      [],
      [6,7,9,10],
      [4,5,6,10,11,12],
      [3,4,5,6,10,11,12,13],
      [2,3,4,5,11,12,13,14],
      [2,3,4,5,11,12,13,14],
      [1,2,3,4,5,11,12,13,14,15],
      [1,5,11,15]
    ].flatMap((a, i) => a.map(x => new CrossStitch(x, i+1, CrossStitch.red)));

    const yellow = [
      [],
      [8],
      [7,8,9],
      [7,8,9],
      [6,7,8,9,10],
      [6,7,8,9,10],
      [6,7,8,9,10],
      [6,10]
    ].flatMap((a, i) => a.map(x => new CrossStitch(x, i+1, CrossStitch.yellow)));

     const black = [
      [8],
      [],
      [],
      [],
      [],
      [],
      [],
      [8],
      [8],
      [8],
      [8],
      [8],
      [6,8],
      [6,7,8],
    ].flatMap((a, i) => a.map(x => new CrossStitch(x, i+1, CrossStitch.black)));

    return red.concat(yellow).concat(black);
};