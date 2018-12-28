<template>
  <div>
    <input type="checkbox" v-model="data.check"/>
    {{data.todo}}
    <button v-if="!data.archive" @click="setArchive">В архив</button>
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  methods: {
    setArchive() {
      this.$store.dispatch("archive", this.index)
    }
  }
}
</script>

