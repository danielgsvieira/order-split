<template>
  <v-container>
    <h3>Pessoas</h3>
    <v-row>
      <v-chip
        class="ma-1"
        v-for="person in persons"
        :key="person.name"
        close
        @click:close="removePerson(person.name)"
      >
        {{ person.name }}
      </v-chip>
    </v-row>
    <v-row justify="start" align="center">
      <v-col cols="12" md="6" xl="4">
        <v-text-field
          outlined
          dense
          hide-details
          label="Nome"
          v-model="personEdit.name"
          @keydown.enter="onAddPerson(personEdit.name)"
          append-outer-icon="mdi-plus"
          @click:append-outer="onAddPerson(personEdit.name)"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Persons.ts"></script>
