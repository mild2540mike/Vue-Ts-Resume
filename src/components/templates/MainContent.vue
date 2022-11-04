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

    <!-- <Section
      title="ประสบการณ์ทำงาน"
      text="ประสบการณ์ทำงาน"
      :imgSrc="coursesImg"
      alt="Página de cursos online"
      reverse
    /> -->

    <Contact />
<!-- <div class="elfsight-app-abdb58e2-bb8d-40f5-8514-8d14198d9f2c"></div> -->
  </main>
</template>

<script setup lang="ts">
import Section from '../organisms/Section.vue'
import Advantages from '../molecules/Advantages.vue'
import Testimonial from '../organisms/Testimonial.vue'
import Contact from '../organisms/Contact.vue'
import Experience from '../organisms/Experience.vue'

</script>
