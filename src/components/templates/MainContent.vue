<template>
  <main class="mx-5 xs:mx-14 lg:!mx-auto lg:max-w-5xl">
    
    <Section
      id="product"
      title="ความคาดหวัง"
      text="ตำแหน่งงานที่สนใจ"
      alt="..."
    />
    <Advantages />
    <Testimonial />
    <Experience />
    <Contact />
  </main>
</template>

<script setup lang="ts">
import Section from '../organisms/Section.vue'
import Advantages from '../molecules/Advantages.vue'
import Testimonial from '../organisms/Testimonial.vue'
import Contact from '../organisms/Contact.vue'
import Experience from '../organisms/Experience.vue'

</script>
