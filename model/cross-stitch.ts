export class CrossStitch {
  static defaultRadius: number = 5;
  static defaultWidth: number = 5;
  static red: string = '#ff0000';
  static blue: string = '#00bfff';
  static yellow: string = '#ffff00';
  static black: string = '#000000';

  constructor(
    public readonly x: number, 
    public readonly y: number, 
    public readonly color: string
    ){
    };
}