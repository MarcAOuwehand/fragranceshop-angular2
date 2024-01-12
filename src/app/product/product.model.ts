export class Product {
  public productID: string
  public name: string;
  public brand: string;
  public price: number;
  public description: string;
  public img_path: string

  constructor(productID: string, name: string, brand: string, price: number, description: string, img_path: string) {
    this.productID = productID;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.description = description;
    this.img_path = img_path;
  }
}
