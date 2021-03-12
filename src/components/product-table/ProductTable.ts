import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import PersonsCell from '@/components/product-table/persons-cell/PersonsCell.vue';
import NewProductForm from '@/components/product-table/new-product-form/NewProductForm.vue';
import { toCurrency } from '@/core/helpers/currency';

export default Vue.extend({
  name: 'ProductTable',
  components: {
    PersonsCell,
    NewProductForm,
  },
  data: () => ({
    tableHeaders: [
      {
        text: 'Nome',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: 'Preço',
        align: 'center',
        sortable: true,
        value: 'value',
      },
      {
        text: 'Pessoas',
        align: 'start',
        value: 'persons',
      },
      {
        text: 'Remover',
        align: 'center',
        value: 'remove',
      },
    ],
  }),
  computed: {
    ...mapGetters('productsStore', ['products', 'totalPrice']),
  },
  methods: {
    ...mapActions('productsStore', ['addProduct', 'removeProduct', 'updatePersonsOfProduct']),
    toCurrency(value: number): string {
      return toCurrency(value, 'R$', ',');
    },
  },
});
