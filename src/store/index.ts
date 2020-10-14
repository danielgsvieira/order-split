import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { PaymentsState } from './payments/state';
import { paymentsStore } from './payments/payments.module';
import { personsStore } from './persons/persons.module';
import { PersonsState } from './persons/state';
import { productsStore } from './products/products.module';
import { ProductsState } from './products/state';

type State = PersonsState | ProductsState | PaymentsState;

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    personsStore,
    productsStore,
    paymentsStore,
  } as ModuleTree<State>,
});
