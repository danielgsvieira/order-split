import { MutationTree } from 'vuex';
import { ProductsState } from './state';
import { StoreProduct } from '../../core/models/StoreProduct';

const mutations: MutationTree<ProductsState> = {
  setProducts(state: ProductsState, products: StoreProduct[]): void {
    state.products = products;
  },
  addProduct(state: ProductsState, product: StoreProduct): void {
    state.products.push(product);
  },
  removeProduct(state: ProductsState, product: StoreProduct): void {
    const index = state.products.findIndex((el: StoreProduct) => {
      return el.id === product.id;
    });

    state.products.splice(index, 1);
  },
  updatePersonsOfProduct(
    state: ProductsState,
    data: { product: StoreProduct; personName: string },
  ): void {
    const row = state.products.find((el: StoreProduct) => el.id === data.product.id);

    row?.updatePersons(data.personName);
  },
};

export { mutations };
