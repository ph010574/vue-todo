import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Tarefas:[
      { id: 1,titulo: "ir ao mercado", Concluido: false },
      ],
  },
  mutations: {
    adicionaTarefa(state,titulo){
      if(titulo){
        state.Tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })

      }
    },
    removeTarefa(state,id){
      state.Tarefas = state.Tarefas.filter(tarefa => tarefa.id !== id)

    }
  },
  actions: {
  },
  modules: {
  }
})
