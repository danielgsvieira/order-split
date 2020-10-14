import { Product } from '@/core/models/Product';
import { GetterTree } from 'vuex';
import { ProductsState } from './state';

const getters: GetterTree<ProductsState, ProductsState> = {
  products: (state): Product[] => state.products,
};

export { getters };
