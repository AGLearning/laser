export class Circle {
  static defaultRadius: number = 0.8;

  constructor(
    public readonly x: number, 
    public readonly y: number, 
    public readonly r: number = Circle.defaultRadius){

    };
}