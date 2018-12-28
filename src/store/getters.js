export default {
  getNonArchiveTodo(state) {
    return state.todos.filter(item => item.archive == false)
  },
  getArchiveTodo(state) {
    return state.todos.filter(item => item.archive)
  }
}