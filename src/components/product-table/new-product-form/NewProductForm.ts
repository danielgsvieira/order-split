import Vue from 'vue';
import { Product } from '@/core/models/Product';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'NewProductForm',
  data: () => ({
    productEdit: new Product(),
  }),
  computed: {
    productNameInput(): Vue & { focus: () => void } {
      return this.$refs.productNameInput as Vue & { focus: () => void };
    },
  },
  methods: {
    ...mapActions('productsStore', ['addProduct', 'updatePersonsOfProduct']),
    clearAddProductForm() {
      this.productEdit = new Product();
    },
    onAddProduct(): void {
      const product = new Product(this.productEdit.name, Number(this.productEdit.value));
      this.addProduct(product);
      this.clearAddProductForm();
      this.productNameInput.focus();
    },
  },
});
