export interface IImage {
  idImage: number,
  name: string,
  imageBytes: number[]
}

export class Image implements IImage {
  constructor(
    public idImage: number,
    public name: string,
    public imageBytes: number[]
  ) {}

  formatImage(): string | null {
    if (this.imageBytes == null) {
      return null;
    }
    return 'data:image/jpeg;base64,' + this.imageBytes;
  }

}
