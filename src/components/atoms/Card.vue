<template>
  <div class="grid bg-orange-600 bg-opacity-10 p-9 gap-4 rounded-lg hover:shadow-filt cursor">
    <h1 class="text-3xl text-titleColor font-semibold">
      {{ title }}
    </h1>

    <p class="text-txtColor max-w-[14rem]">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>
