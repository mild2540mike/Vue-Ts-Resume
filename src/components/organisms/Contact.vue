<template>
<section class="my-36" id="contact">
    <div class="gap-y-14 md:grid-cols-2 grid ml-[1px]">
        <div class="flex flex-col gap-12">
            <Info title="ที่อยู่" icon="majesticons:home-line" alt="home icon" text="หมู่บ้านเคหะธานี 4 กรุงเทพมหานคร 10240" link="https://www.google.co.th/maps/place/%E0%B8%8B.+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%84%E0%B8%AB%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5+4+%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2+%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AA%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10240/@13.7826588,100.7065073,17z/data=!4m5!3m4!1s0x311d6407fa0cfd93:0xba43317866afc889!8m2!3d13.7826588!4d100.708696?hl=th" />
            <div class="grid gap-y-8">
                <Info title="เบอร์ติดต่อ" icon="majesticons:phone-line" alt="telephone icon" text="+66 9-2539-6670" link="tel:+66925396670" />

                <Info title="ส่งอีเมลถึงฉัน" icon="majesticons:mail-line" alt="E-mail icon" text="Yanaranop2540mike@gmail.com.com" link="mailto:Yanaranop2540mike@gmail.com.com" />
            </div>
        </div>
        <form @submit="handleFormData" method="post" action="https://sheetdb.io/api/v1/y1zcsemq9txpf">
            <div class="grid gap-y-6 mb-6">
                <Input type="text" label="ชื่อบริษัท" name="name" />

                <Input type="url" label="ลิงค์เข้าร่วมสัมภาษณ์" name="link" />
                <span class="text-red-500 text-xs	">* <span class="text-gray-500 text-xs	">https://teams.microsoft.com/join-interviwe</span></span>
                <div class="relative h-28">
                    <textarea name="descriptions" id="descriptions" placeholder=" " class="contactInput focus:labelUp"></textarea>
                    <label class="labelDown" for="descriptions">รายละเอียดงาน</label>
                    <button class="buttonFirstColor" type="submit">
                        ส่งนัดหมาย
                        <i class="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</section>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import Info from '../molecules/Info.vue'
import Input from '../atoms/Input.vue'

export default defineComponent({
    components: {
        Info,
        Input,
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
