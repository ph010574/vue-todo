<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="CampoInput"
        label="Informe a Tarefa"
        outlined
        clearable
        @keyup.enter="hendleAddTarefa"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.Tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "../components/Tarefas/Tarefa.vue";

export default {
  name: "Home",

  components: {
    Tarefa,
  },
  data() {
    return {
      CampoInput: null,
    };
  },
  methods: {
    hendleAddTarefa() {
      this.$store.commit("adicionaTarefa", this.CampoInput);
      this.CampoInput = null;
    },
  },
};
</script>
