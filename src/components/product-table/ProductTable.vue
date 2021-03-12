<template>
  <v-container>
    <h3>Produtos</h3>
    <v-data-table
      :headers="tableHeaders"
      :items="products"
      :items-per-page="-1"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:item.value="{ item }">
        {{ toCurrency(item.value) }}
      </template>

      <template v-slot:item.persons="{ item }">
        <persons-cell :item="item"></persons-cell>
      </template>

      <template v-slot:item.remove="{ item }">
        <v-icon @click="removeProduct(item)">mdi-delete</v-icon>
      </template>

      <template v-slot:footer>
        <v-row class="mt-1 mx-1 px-2">
          <v-col>
            Valor total: {{ toCurrency(totalPrice) }}
          </v-col>
        </v-row>
        <new-product-form></new-product-form>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts" src="./ProductTable.ts"></script>
