<template>
<div>
  <input type="text" v-model="newTodo" @keydown.enter="addTodo">
  <button @click="addTodo">Добавить</button>
  <todo-list type="NonArchive"></todo-list>
</div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList';

export default {
  name: 'home',
  data() {
    return {
      newTodo: ''
    }
  },
  components: {
    TodoList
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodo);
      this.newTodo = '';
    }
  }
}
</script>
