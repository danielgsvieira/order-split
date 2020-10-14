<template>
  <v-form @submit.prevent="onAddProduct()">
    <v-row class="ma-1 pa-2">
      <v-col>
        <v-text-field
          outlined
          dense
          hide-details
          type="text"
          label="Nome"
          v-model="productEdit.name"
          ref="productNameInput"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          hide-details
          type="number"
          step="0.01"
          label="Preço"
          v-model="productEdit.value"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn type="submit">Adicionar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
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
</script>