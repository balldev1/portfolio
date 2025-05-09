<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4 pb-10">
      <main class="text-4xl underline underline-offset-8 font-semibold">
        Vue
      </main>

      <h2 class="text-gray-300 leading-8">
        JavaScript Framework สำหรับสร้าง เว็บแอปพลิเคชันฝั่งหน้าบ้าน (Frontend)
        ที่เน้นความง่าย ยืดหยุ่น และรวดเร็วในการพัฒนา โดยเฉพาะสำหรับคนที่คุ้นกับ
        HTML, CSS, และ JavaScript
      </h2>

      <span
        class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
      >
        สรุปตามความเข้าใจ
      </span>

      <div class="mt-5 flex flex-col gap-5 w-full items-center">
        <img
          src="/project/vue.webp"
          loading="lazy"
          alt="vue"
          class="w-full h-96"
        />
      </div>

      <!-- setup  -->
      <div ref="setupRef">
        <div class="flex flex-col gap-4">
          <h2
            class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
          >
            script setup
          </h2>
          <h2 class="text-gray-300 leading-8">
            เวลาเขียน script อ่านง่าย กระชับกว่า ไม่ต้องคอย setup ใน script
          </h2>
        </div>
        <div className="divider "></div>
      </div>

      <div ref="vRef">
        <div class="flex flex-col gap-4">
          <h2
            class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
          >
            v-...
          </h2>
          <h2 class="text-gray-300 leading-8">
            v-bind = ผูกค่า data ไปยัง attribute เช่น ผูก image เมือ image
            เปลี่ยน image ที่แสดงจะเปลี่ยนตาม <br />
            v-model = ผูกข้อมูลแบบ two-way (เช่น input) เช่นเมือ input
            มีใส่ข้อมูลมา ค่า ref ที่เก็บ state เปลี่ยน <br />
            v-if = แสดง element ถ้าเงื่อนไขเป็นจริง <br />
            v-else = แสดงเมื่อ v-if เป็น false <br />
            v-else-if = เช็คเงื่อนไขต่อจาก v-if <br />
            v-show = ซ่อนแต่ไม่ลบออกจาก dom เช่น modal
            <br />
            v-for = วนลูป data element
            <br />
            v-on = ผูก event เช่น @click="submit"
            <br />
            v-slot = ส่งข้อมูลระหว่าง slot/component เช่น ใช้ส่ง “slot” จาก
            parent เข้าไปใน component ลูก
            <br />
            v-pre = ข้ามการ compile template เช่น ไม่ต้องแปลง code หรือ syntax
            ในข้อความนี้ <br />
            v-cloak ซ่อน DOM จนกว่า Vue จะพร้อม เช่น กำลังโหลด...
            <br />
            v-once = render ครั้งเดียว ไม่ re-render เช่น message เปลี่ยน → Vue
            จะไม่อัปเดตข้อความใหม่
            <br />
            v-memo = Memoize block ให้ render ใหม่เมื่อ dependency เปลี่ยน เช่น
            Vue จะ render ใหม่เฉพาะเมื่อ count เปลี่ยน
          </h2>
        </div>
        <div className="divider "></div>
      </div>

      <!-- <div ref="oopRef"><Oop /></div> -->
    </div>

    <!-- เมนู sticky -->
    <div class="w-80 sticky top-24 self-start -balance">
      <button
        v-for="section in sections"
        :key="section.name"
        @click="scrollTo(section.name as SectionName)"
        :class="{
          'bg-gray-500 text-white': activeSection === section.name,
          'bg-white': activeSection !== section.name,
        }"
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white uppercase"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type SectionName = "setup" | "v";

const activeSection = ref<SectionName | null>(null);

const refsMap: Record<SectionName, any> = {
  setup: ref<HTMLElement | null>(null),
  v: ref<HTMLElement | null>(null),
};

const sections: { name: SectionName; label: string }[] = [
  { name: "setup", label: "SETUP" },
  { name: "v", label: "V" },
];

const scrollTo = (section: SectionName) => {
  activeSection.value = section;
  refsMap[section].value?.scrollIntoView({ behavior: "smooth" });
};

const setupRef = refsMap.setup;
const vRef = refsMap.v;
</script>
