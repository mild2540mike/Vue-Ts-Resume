<template>
<section class="my-36 grid grid-cols-2" id="experience">
    <!-- <img src="../../assets/img/about/m5.JPG" class="hidden lg:flex max-w-[25rem] ml-16" /> -->
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div class="transform scale-110 -rotate-6">
            <Image src="../../assets/img/project/other/1 (5).JPG" />
        </div>
        <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
            <Image src="../../assets/img/project/other/1 (6).JPG" />
        </div>
        <div class="transform scale-150 translate-y-11">
            <Image src="../../assets/img/project/other/1 (4).JPG" />
        </div>
        <div class="transform translate-y-24">
            <Image src="../../assets/img/project/other/1 (1).JPG" />
        </div>
        <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4 bg-light-blue-600 opacity-25">
            <Image src="../../assets/img/project/other/1 (3).JPG" />
        </div>
    </div>

    <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">มกราคม 2021</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Software Development</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"><strong>ออกแบบและพัฒนาระบบการออกประกันภัยโดยส่งมอบให้กับทั้งลูกค้า และคู่ค้า โดยมีส่วนของโมดูล ต่างๆ</strong> <br>
                -ระบบการสร้างเอกสารเอกสารประกันภัย, การจัดเก็บเอกสารเพื่อส่งผ่าน FTP ให้กับคู่ค้า, ระบบการส่งอีเมลล์, ระบบการจัดการทรัพยากรภายในเซิร์ฟเวอร์(จัดการ log, รายงาน) และการทำโหลดบาลานซ์ (self replicate) <br>
                -ระบบ Digital Signature เอกสารผ่าน api
                -ระบบหน่วงเวลาการออกสลักหลังและใบเตือน <br>
                -ระบบการส่งอีเมลล์สำหรับคู่ค้าของสลักหลังและใบเตือน <br>
                -ระบบการจัดกลุ่มเอกสารเพื่อส่งเอกสาร <br>
                -ระบบการพิมพ์เอกสารโดยติดต่อกับปริ้นเตอร์ <br>
                -ทำการ Integrate และ migration database (informix, oracle) เพื่อให้บริการระบบบน Azure on Cloud <br>
                <span style="color: #cccccc; font-size: small;"><i><span style="color: red !important;">*</span> Tech Stack (Javascript, VBscript, HTML, CSS, Node.js, Shell Script, batch, Informix, Oracle)</i></span>
            </p>
            <!-- <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg></a> -->
        </li>
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">สิงหาคม 2020</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Web Developmer</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">ออกแบบและพัฒนาเว็บไซต์ในส่วนของโมดูล <br>
                -การจองคิวรถ, ออกรายงาน <br>
                -แก้ไขบัค การวางจุดส่งสินค้า, การแสดงผลมุดบน Google map, hhid ของการจัดการเครื่อง handheld <br>
                <span style="color: #cccccc; font-size: small;"><i><span style="color: red !important;">*</span> Tech Stack (.Net Core, C#, Ext.js, CSS, Sql server)</i></span>
            </p>
        </li>
        <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">พฤศจิกายน 2019</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Co-op</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">-โปรเจคฝึกงานเว็บไซต์บริษัทสมบูรณ์การพิมพ์ : (php, react, mysql) <br>
                -โปรเจคฝึกงานระบบ Enterprise Resource Planning : ERP หจก.มิตรภาพการพิมพ์1995 : Tech Stack (node, react, mysql)</p>
            <span style="color: #cccccc; font-size: small;"><i><span style="color: red !important;">*</span> Tech Stack (React.js, Node.js, PHP, SCSS, Mysql)</i></span>
        </li>
    </ol>
</section>
</template>

<style>
@media (max-width: 1025px) {
    .grid {
        grid-template-columns: none;
    }
}
</style>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import Image from '../atoms/Image.vue'

export default defineComponent({
    components: Image,
})
</script>
