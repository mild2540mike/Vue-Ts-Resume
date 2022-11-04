<template>
  <header
    class="flex top-0 sticky z-50 py-7 justify-between bg-bodyColor lg:!mx-auto px-5 shadow-lg"
  >
    <Logo />

    <nav class="justify-between self-center">
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden float-right cursor-pointer hover:opacity-60"
      >
        <Icon
          :icon="menuOpen ? 'ep:arrow-down' : 'ep:more-filled'"
          class="text-3xl text-titleColor transform motion-safe:hover:scale-110 duration-300"
          aria-label="menu mobile"
        />
      </button>

      <div :class="menuOpen ? 'flex' : 'hidden'" class="md:flex">
        <ul
          class="flex flex-col absolute md:!relative top-24 py-5 rounded-lg bg-white shadow-2xl text-titleColor text-center font-semibold md:flex-row md:top-0 md:space-x-8 lg:space-x-10 md:py-0 md:bg-transparent"
        >
          <NavLink class="firstColorLink" text="ความคาดหวัง" link="#product" />

          <NavLink class="firstColorLink" text="เกี่ยวกับฉัน" link="#about" />

          <NavLink class="firstColorLink" text="ประสบการณ์" link="#experience" />

          <NavLink class="firstColorLink" text="ติดต่อ" link="#contact" />


        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '../atoms/Logo.vue'
import NavLink from '../atoms/NavLink.vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Logo,
    NavLink,
    Icon
  },
  data() {
    return {
      menuOpen: false
    }
  }
})
</script>
