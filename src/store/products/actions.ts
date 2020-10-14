import { Product } from '@/core/models/Product';
import { ActionContext, ActionTree } from 'vuex';
import { ProductsState } from './state';
import { StoreProduct } from '../../core/models/StoreProduct';

type ProductsActionContext = ActionContext<ProductsState, ProductsState>;

const actions: ActionTree<ProductsState, ProductsState> = {
  setProducts(context: ProductsActionContext, products: Product[]) {
    const storeProducts = products.map((el: Product) => {
      return new StoreProduct(el.name, el.value);
    });

    context.commit('setProducts', storeProducts);
  },
  addProduct(context: ProductsActionContext, product: Product) {
    const createdProduct = new StoreProduct(
      product.name,
      product.value,
    );

    context.commit('addProduct', createdProduct);
  },
  removeProduct(context: ProductsActionContext, product: StoreProduct) {
    context.commit('removeProduct', product);
  },
  updatePersonsOfProduct(
    context: ProductsActionContext,
    data: { product: StoreProduct; personName: string },
  ): void {
    context.commit('updatePersonsOfProduct', data);
  },
};

export { actions };
