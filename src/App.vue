<template>
<Header />
<MainContent />
<Footer />
<notifications position="bottom right" classes="notifications" :max="2" />
<div class="elfsight-app-abdb58e2-bb8d-40f5-8514-8d14198d9f2c"></div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

import Header from './components/molecules/Header.vue'
import MainContent from './components/templates/MainContent.vue'
import Footer from './components/molecules/Footer.vue'

export default defineComponent({
    components: {
        Header,
        MainContent,
        Footer
    }
})
</script>
