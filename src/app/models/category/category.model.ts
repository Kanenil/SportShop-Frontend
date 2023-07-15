export interface ICategory {
  idCategory: number,
  name: string
}

export class Category implements ICategory {
  constructor(
    public idCategory: number,
    public name: string
  ) {}
}
