import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [

    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})