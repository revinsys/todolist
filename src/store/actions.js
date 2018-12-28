export default {
  loadTodos({ commit }) {
    commit('setAllTodo');
  },
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
    commit('saveTodo');
  },
  archive({ commit }, index) {
    commit('archive', index);
    commit('saveTodo');
  }
}