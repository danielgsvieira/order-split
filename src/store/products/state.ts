import { Product } from '@/core/models/Product';
import { StoreProduct } from '../../core/models/StoreProduct';

export class ProductsState {
  public products: StoreProduct[];

  constructor(products: Product[] = []) {
    this.products = products.map(
      (el: Product) => new StoreProduct(el.name, el.value),
    );
  }
}
