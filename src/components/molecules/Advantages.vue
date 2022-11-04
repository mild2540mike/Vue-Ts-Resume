<template>
  <section
    class="flex flex-col md:flex-row my-32 gap-10 text-center w-fit mx-auto"
  >
    <Card class="hover:shadow-xl hover:animate-bounce" title="Front End" text="React.js, Vue.js, Ext.js, Svelte.js, " />

    <Card class="hover:shadow-xl hover:animate-bounce" title="Back End" text="Node.js, PHP, .Net Core, C#, Batch Script, MySql, MS Sql Server, Informix, Oracle" />

    <Card class="hover:shadow-xl hover:animate-bounce" title="Tool" text="Planet Press, Microsoft Azure, Postman" />
  </section>
</template>

<style>
  .cursor {
    cursor: pointer;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../atoms/Card.vue'

export default defineComponent({
  components: {
    Card
  }
})
</script>
