<template>
    <img class="hover:opacity-25 cursor-pointer" :src="link" alt="..." loading="lazy" />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    props: {
        src: {
        href: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      loading: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  })
  </script>
  