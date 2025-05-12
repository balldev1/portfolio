<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4 pb-10">
      <main class="text-4xl underline underline-offset-8 font-semibold">
        Laravel
      </main>

      <h2 class="text-gray-300 leading-8">
        Laravel คือ Framework สำหรับพัฒนาเว็บแอปพลิเคชันด้วยภาษา PHP
      </h2>

      <span
        class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
      >
        สรุปตามความเข้าใจ
      </span>

      <div class="mt-5 flex flex-col gap-5 w-full items-center">
        <img
          src="/project/laravel.webp"
          loading="lazy"
          alt="vue"
          class="w-full h-96"
        />
      </div>

      <!-- feature  -->
      <div ref="featureRef">
        <div class="flex flex-col gap-4">
          <h2
            class="text-gray-950 border-none text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
          >
            คุณสมบัติเด่นของ Laravel
          </h2>
          <h2 class="text-gray-300 leading-8">
            MVC Architecture (Model–View–Controller):
            แยกโครงสร้างของระบบให้เป็นระเบียบ เช่น view ส่วนที่ user เห็น ,
            model ส่วนติดต่อฐานข้อมูล , Controller logic ต่างๆ <br /><br />
            Routing กำหนด URL Request ที่เชื่อมไปยัง Controller <br /><br />
            Eloquent ORM: ใช้ OOP เข้าถึงฐานข้อมูลได้ง่ายโดยไม่ต้องเขียน SQL
            โดยตรง คำสั่งเขียนง่ายขึ้น<br /><br />
            Migration & Seeder: ช่วยจัดการโครงสร้างฐานข้อมูล<br /><br />
            Blade Template Engine: template view frontend ของ laravel
            <br /><br />
            Security ในตัว: เช่น การเข้ารหัส รหัสผ่าน, CSRF protection<br /><br />
            Artisan Command Line Tool: เครื่องมือ command-line
            สำหรับสร้างไฟล์และจัดการระบบต่าง ๆ<br /><br />
            Built-in Authentication & Authorization:
            ระบบล็อกอิน/สิทธิ์การใช้งานพร้อมใช้งาน เช่น การแบ่ง role ,
            การเข้าถึงหน้าเฉพาะที่มีสิทธิ์<br /><br />
            Validation ตรวจสอบข้อมูล เช่น ตรวจสอบ input ว่าใส่ข้อมูลครบไหมก่อนกด
            submit<br /><br />
            Middleware กรองหรือจัดการคำขอ (request)
            ที่เข้ามายังแอปพลิเคชันก่อนจะถึง Controller เช่น
            ตรวจสอบว่าผู้ใช้ล็อกอินหรือยัง<br /><br />
            .env เก็บ config environment เช่น db , secertkey , URL<br /><br />
          </h2>
        </div>
        <div className="divider "></div>
      </div>

      <!-- feature  -->
      <div ref="lifecycleRef">
        <div class="flex flex-col gap-4">
          <h2
            class="text-gray-950 border-none text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
          >
            lifecycle
          </h2>
          <h2 class="text-gray-300 leading-8">
            1. Request เข้า Laravel ผ่าน public/index.php<br /><br />
            2. Kernel ทำงาน HTTP Kernel รับคำขอเว็บและโหลด Middleware ต่าง ๆ
            <br /><br />
            3. Middleware ตรวจสอบหรือดักจับ request เช่น เช็คล็อกอิน
            <br /><br />
            4. Routing Laravel ตรวจสอบว่า route ไหนที่ตรงกับ URL หากเจอ route
            ที่ตรง → ส่ง request ไปยัง controller ที่กำหนดไว้
            <br /><br />
            5. Controller ทำงาน Controller ประมวลผล logic หลัก เช่น ดึงข้อมูลจาก
            database (ผ่าน model)
            <br /><br />
            6. Model (Eloquent ORM) ถ้าต้องดึงข้อมูลจากฐานข้อมูล จะใช้ Eloquent
            model
            <br /><br />
            7. View (Blade Template) Controller ส่งข้อมูลไปให้ view Laravel
            render HTML ออกมาให้ผู้ใช้เห็น
            <br /><br />
            8. Response กลับไปยังผู้ใช้ Laravel สร้าง Response object
            แล้วส่งกลับ browser อาจเป็น HTML, JSON, redirect หรือไฟล์ดาวน์โหลด
            <br /><br />
            Request -> index.php -> Kernel -> Middleware -> Route -> Controller
            -> Model -> View -> Response
          </h2>
        </div>
        <div class="my-5 flex flex-col gap-5">
          <img src="/project/laravellifecycle.webp" loading="lazy" class="" />
        </div>
        <div className="divider "></div>
      </div>
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
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type SectionName = "feature" | "lifecycle";

const activeSection = ref<SectionName | null>(null);

const refsMap: Record<SectionName, any> = {
  feature: ref<HTMLElement | null>(null),
  lifecycle: ref<HTMLElement | null>(null),
};

const sections: { name: SectionName; label: string }[] = [
  { name: "feature", label: "Feature" },
  { name: "lifecycle", label: "Lifecycle" },
];

const scrollTo = (section: SectionName) => {
  activeSection.value = section;
  refsMap[section].value?.scrollIntoView({ behavior: "smooth" });
};

const featureRef = refsMap.feature;
const lifecycleRef = refsMap.lifecycle;
</script>
