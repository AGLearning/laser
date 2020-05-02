import { CrossStitch } from "../model/cross-stitch";

export const christmastree = () => {
  const green = [
    [6],
    [5,6,7],
    [5,6,7],
    [4,5,7,8],
    [4,5,6,7],
    [3,4,5,6,7,8,9],
    [3,5,6,8,9],
    [2,3,4,5,6,7,8,10],
    [2,3,4,6,7,8,9,10],
    [1,3,4,5,6,7,9,10,11],
    [1,2,3,4,5,6,7,8,9,10,11],
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.green))
  );

  const black = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [5,6,7],
    [5,6,7]
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.black))
  );

  const red = [
    [],
    [],
    [],
    [6],
    [8],
    [],
    [4,7],
    [9],
    [5],
    [2,8]
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.red))
  );

  return green.concat(black).concat(red);
};

export const puchar = () => {
  const yellow = [
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
    [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    [1, 3, 4, 5, 6, 8, 9, 10, 11, 13],
    [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
    [3, 4, 5, 6, 8, 9, 10, 11],
    [4, 5, 6, 7, 8, 9, 10],
    [5, 6, 7, 8, 9],
    [6, 7, 8],
    [6, 7, 8],
    [6, 7, 8],
    [5, 6, 7, 8, 9]
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.yellow))
  );

  const black = [
    [],
    [],
    [7],
    [7],
    [7],
    [7],
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.black))
  );

  return yellow.concat(black);
};

export const heart = () => {
  return [
    [3, 4, 5, 9, 10, 11],
    [2, 3, 4, 5, 6, 8, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [3, 4, 5, 6, 7, 8, 9, 10, 11],
    [4, 5, 6, 7, 8, 9, 10],
    [5, 6, 7, 8, 9],
    [6, 7, 8],
    [7]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.red)));
};

export const flower = () => {
  const petals = [
    [7],
    [6, 7, 8],
    [3, 4, 6, 7, 8, 10, 11],
    [3, 4, 5, 7, 9, 10, 11],
    [4, 5, 9, 10],
    [2, 3, 11, 12],
    [1, 2, 3, 4, 10, 11, 12, 13],
    [2, 3, 11, 12],
    [4, 5, 9, 10],
    [3, 4, 5, 7, 9, 10, 11],
    [3, 4, 6, 7, 8, 10, 11],
    [6, 7, 8],
    [7]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.blue)));

  const middle = [[], [], [], [], [], [6, 7, 8], [6, 7, 8], [6, 7, 8]].flatMap(
    (a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.yellow))
  );

  return petals.concat(middle);
};

export const umbrella = () => {
  const red = [
    [],
    [6, 7, 9, 10],
    [4, 5, 6, 10, 11, 12],
    [3, 4, 5, 6, 10, 11, 12, 13],
    [2, 3, 4, 5, 11, 12, 13, 14],
    [2, 3, 4, 5, 11, 12, 13, 14],
    [1, 2, 3, 4, 5, 11, 12, 13, 14, 15],
    [1, 5, 11, 15]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.red)));

  const yellow = [
    [],
    [8],
    [7, 8, 9],
    [7, 8, 9],
    [6, 7, 8, 9, 10],
    [6, 7, 8, 9, 10],
    [6, 7, 8, 9, 10],
    [6, 10]
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.yellow))
  );

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
    [6, 8],
    [6, 7, 8]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.black)));

  return red.concat(yellow).concat(black);
};

export const face = () => {
  const yellow = [
    [4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 6, 10],
    [1, 11],
    [1, 2, 6, 10, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [1, 2, 3, 5, 6, 7, 9, 10, 11],
    [2, 3, 4, 8, 9, 10],
    [3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8]
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.yellow))
  );

  const red = [[], [], [], [], [], [], [], [4, 8], [5, 6, 7]].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.red))
  );

  const black = [
    [],
    [],
    [],
    [1, 3, 4, 5, 7, 8, 9, 11],
    [2, 3, 5, 6, 7, 9, 10],
    [3, 4, 5, 7, 8, 9]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.black)));

  const blue = [[], [], [], [], [4, 8]].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.blue))
  );

  return red
    .concat(yellow)
    .concat(black)
    .concat(blue);
};

export const ladybug = () => {
  const red = [
    [],
    [],
    [],
    [4, 5, 6, 7, 8, 9],
    [3, 4, 5, 8, 9, 10],
    [2, 3, 4, 5, 8, 9, 10, 11],
    [2, 4, 5, 6, 7, 8, 9, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 3, 6, 7, 10, 11, 12],
    [1, 2, 3, 6, 7, 10, 11, 12],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2, 4, 5, 6, 7, 8, 9, 11],
    [3, 4, 5, 6, 7, 8, 9, 10],
    [4, 5, 6, 7, 8, 9]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.red)));

  const black = [
    [6, 7],
    [5, 6, 7, 8],
    [4, 5, 6, 7, 8, 9],
    [],
    [6, 7],
    [6, 7],
    [3, 10],
    [],
    [4, 5, 8, 9],
    [4, 5, 8, 9],
    [],
    [3, 10]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.black)));

  return red.concat(black);
};

export const rubik = () => {
  const red = [
    [],
    [2, 3, 4],
    [2, 3, 4],
    [2, 3, 4],
    [],
    [6, 7, 8],
    [6, 7, 8],
    [6, 7, 8],
    [],
    [10, 11, 12],
    [10, 11, 12],
    [10, 11, 12]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.red)));

  const yellow = [
    [],
    [6, 7, 8],
    [6, 7, 8],
    [6, 7, 8],
    [],
    [10, 11, 12],
    [10, 11, 12],
    [10, 11, 12]
  ].flatMap((a, i) =>
    a.map(x => new CrossStitch(x, i + 1, CrossStitch.yellow))
  );

  const blue = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [2, 3, 4, 6, 7, 8],
    [2, 3, 4, 6, 7, 8],
    [2, 3, 4, 6, 7, 8]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.blue)));

  const green = [
    [],
    [10, 11, 12],
    [10, 11, 12],
    [10, 11, 12],
    [],
    [2, 3, 4],
    [2, 3, 4],
    [2, 3, 4]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.green)));

  const black = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 5, 9, 13],
    [1, 5, 9, 13],
    [1, 5, 9, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 5, 9, 13],
    [1, 5, 9, 13],
    [1, 5, 9, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 5, 9, 13],
    [1, 5, 9, 13],
    [1, 5, 9, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  ].flatMap((a, i) => a.map(x => new CrossStitch(x, i + 1, CrossStitch.black)));

  return red
    .concat(black)
    .concat(yellow)
    .concat(blue)
    .concat(green);
};
