import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { StoreProduct } from '@/core/models/StoreProduct';

export default Vue.extend({
  name: 'PersonsCell',
  props: {
    item: {
      type: StoreProduct,
      required: true,
    },
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('personsStore', ['persons']),
  },
  methods: {
    ...mapActions('productsStore', ['updatePersonsOfProduct']),
    isLast(index: number, array: unknown[]): boolean {
      return index !== array.length - 1;
    },
    onRowUpdate(product: StoreProduct, personName: string): void {
      this.updatePersonsOfProduct({ product, personName });
    },
    selectAll(product: StoreProduct): void {
      for (let i = 0; i < this.persons.length; i += 1) {
        this.updatePersonsOfProduct({ product, personName: this.persons[i].name });
      }
    },
  },
});