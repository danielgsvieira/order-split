import Vue from 'vue';
import { Person } from '@/core/models/Person';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Persons',

  data: () => ({
    personEdit: new Person(), 
  }),
  computed: {
    ...mapGetters('personsStore', ['persons']),
  },
  methods: {
    ...mapActions('personsStore', ['addPerson', 'removePerson']),
    clearPersonEdit(): void {
      this.personEdit = new Person();
    },
    onAddPerson(name: string): void {
      this.addPerson(name);
      this.clearPersonEdit();
    },
  },
});
