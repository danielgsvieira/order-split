<template>
  <v-row align="center" no-gutters>
    <v-checkbox
      class="mr-10 my-0"
      label="Todos"
      color="primary"
      hide-details
      @click.stop="selectAll(item)"
    ></v-checkbox>
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

<script lang="ts" src="./PersonsCell.ts"></script>
