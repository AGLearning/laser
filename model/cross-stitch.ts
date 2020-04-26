export class CrossStitch {
  static defaultRadius: number = 5;
  static defaultWidth: number = 5;
  static red: string = '#ff0000';

  constructor(
    public readonly x: number, 
    public readonly y: number, 
    public readonly color: string,
    public readonly radius: number = CrossStitch.defaultRadius,
    public readonly width: number = CrossStitch.defaultWidth,
    ){
    };
}