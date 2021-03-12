import { Product } from '@/core/models/Product';
import { GetterTree } from 'vuex';
import { ProductsState } from './state';

const getters: GetterTree<ProductsState, ProductsState> = {
  products: (state): Product[] => state.products,
  totalPrice: (state): number => {
    let totalPrice = 0;
    state.products.forEach((el) => totalPrice += el.value);
    return totalPrice;
  },
};

export { getters };
