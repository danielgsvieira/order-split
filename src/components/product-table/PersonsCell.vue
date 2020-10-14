<template>
  <v-row align="center" no-gutters>
    <v-checkbox
      :class="(isLast(index, persons)) ? 'mr-10 my-0' : 'my-0'"
      v-for="(person, index) in persons"
      :key="person.name"
      :label="person.name"
      color="primary"
      hide-details
      :input-value="item.isPersonIncluded(person.name)"
      @click.stop="onRowUpdate(item, person.name)"
    ></v-checkbox>
  </v-row>
</template>

<script lang="ts">
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
      this.updatePersonsOfProduct({product, personName});
    },
  },
});
</script>
