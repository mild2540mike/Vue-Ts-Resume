<template>
  <section
    id="about"
    class="bg-bannerColor rounded-xl max-w-2xl mx-auto lg:max-w-[60rem] my-36"
  >
    <div class="items-center flex flex-col">
      <div class="flex">
        <img
          src="../../assets/img/about/m2.png"
          alt="..."
          class="hidden lg:flex max-w-[18rem] ml-8 lg:pt-14"
        />

        <div class="flex flex-col text-left p-10 lg:pt-20">
          <img
            src="../../assets/img/about/quotes.svg"
            class="max-w-[2rem]"
            alt="..."
          />

          <p class="text-txtColor mb-8 mt-6 mx-0 max-w-xl">
            สวัสดีครับ, ผมไมค์ทำงานในสายงานด้านเทคโนโลยีมากกว่า 3 ปี
            มีประสบการณ์ในด้านการพัฒนาและออกแบบเว็บไซต์ โดยมีเป้าหมายที่ชัดเจน คือการสร้างเทคโนโลยี เพื่อตอบโจทย์ธุรกิจ
            ให้เป็นไปตาม โมเดลธุรกิจของลูกค้า
          </p>

          <div class="flex whitespace-nowrap max-h-14 max-w-14">
            <img
              src="../../assets/img/about/m4.svg"
              alt="..."
              class="min-w-[3.5rem] max-w-[4rem] lg:hidden"
            />
            <div class="ml-5 lg:m-0">
              <p class="text-titleColor font-semibold">ญาณารณพ นวลระแหง</p>
              <p class="text-txtColor">โปรแกรมเมอร์</p>
            </div>
          </div>

          <div class="flex self-end gap-10 mt-6 sm:mt-0 font-semibold">
            <button class="text-txtColor opacity-40 hover:opacity-20">
              <a href="https://linevoom.line.me/user/_dWkCGxDB7s0ga7V6mrS64gMXRwzmkkGR831COPE?utm_medium=windows&utm_source=desktop&utm_campaign=Profile">สอบถาม</a>
            </button>
            <button class="text-firstColor hover:opacity-70"><a href="https://drive.google.com/file/d/17KkKjS8bgsWFUBH_O5ikIhdwzeaU323N/view?usp=sharing">ดาวน์โหลด</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import {
    defineComponent
} from 'vue'
import Info from '../molecules/Info.vue'
import Input from '../atoms/Input.vue'
// import axios from 'axios'

export default defineComponent({
    components: {
        Info,
        Input
    },
    methods: {
        handleFormData(event: Event) {
            event.preventDefault()
            const form = document.querySelector('form')

            fetch(form!.action, {
                    method: 'POST',
                    body: new FormData(form!)
                })
                .then((response) => response.json())
                .then((html) => {
                    if (html.created) {
                        form!.reset()
                        this.$notify({
                            type: 'success',
                            text: `(${html.created}) message sent a successful!`
                        })
                    } else {
                        this.$notify({
                            type: 'error',
                            text: `ERRO: ${html.error}`
                        })
                    }
                })
        },

    }
})
</script>