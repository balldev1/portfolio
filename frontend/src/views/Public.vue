<template>
  <div>
    <h1 class="px-10 pt-10 text-4xl">Work at MODERN NETWORK CO., LTD.</h1>
    <h1 class="px-10 text-gray-300 pt-5 text-md">
      ผมมีประสบการณ์ทำงานที่บริษัท MODERN NETWORK CO., LTD. เป็นที่แรก ตำแหน่ง
      Programmer เป็นระยะเวลา 1 ปี 7 เดือน ปัจจุบันอายุ 30 ปี
      จบการศึกษาระดับประกาศนียบัตรวิชาชีพ (ปวช.) สาขาคอมพิวเตอร์ธุรกิจ
      ก่อนหน้านี้ผมเคยทำธุรกิจส่วนตัว
      และเริ่มต้นศึกษาการเขียนโค้ดด้วยตัวเองเมื่ออายุ 30 ปี
    </h1>
    <h1 class="px-10 text-gray-300 pt-5 text-md">
      แม้ผมจะไม่ได้จบการศึกษาระดับปริญญา แต่ตลอดระยะเวลาที่ผ่านมา
      ผมได้พัฒนาทักษะจากการลงมือทำโปรเจคทั้งฝั่ง Frontend และ Backend
      โดยมีการใช้เทคโนโลยีต่าง ๆ เช่น React, Vue, Next.js, Nuxt, WordPress
      Docker, aapanel , MongoDB, และ C++ รวมถึงเคยพัฒนาระบบที่ deploy
      และจัดการเซิร์ฟเวอร์ผ่าน Linux และ aaPanel ผมเรียนรู้จากการลงมือแก้ปัญหา
      ผมยินดีเรียนรู้เทคโนโลยีใหม่ๆ หากทางบริษัทต้องการ
    </h1>

    <h1 class="px-10 text-gray-300 pt-5 text-md">
      ผมสามารถเข้าใจระบบ ตั้งแต่การออกแบบ พัฒนา ไปจนถึงการ deploy
      ระบบขึ้นใช้งานจริง ผมมีความตั้งใจในการเรียนรู้ด้วยตนเอง และ ทำงานเป็นทีม
      ผมเชื่อมั่นว่าความสามารถในการเรียนรู้ พัฒนา และแก้ปัญหาได้และ
      จะสามารถสร้างประโยชน์ให้กับบริษัทได้อย่างแน่นอนครับ จะดีมากหากให้โอกาสผมทำ
      Test ทดสอบก่อนสัมภาษณ์ เนื่องจากตอนนี้ผมยังทำงานที่ บริษัท MODERN NETWORK
      CO., LTD. หากต้องออกจากที่เก่า จะใช้เวลา 1 เดือนหลังทราบผล
    </h1>

    <h1 class="px-10 text-gray-300 pt-5 text-md">
      ผมพักอยู่พระราม 2 สามารถทำงาน ONSITE / WFH / HYBRID ได้ครับ
      เงินเดือนปัจจุบัน 28,500 บาท คาดหวังเงินเดือน 40,000 บาท
    </h1>
    <h1 class="px-10 text-gray-300 pt-5 text-md">
      นันทวัฒน์ โคลา(บอล) 096-993-3302
    </h1>

    <h1 class="px-10 text-gray-300 pt-5 text-md">ขอบคุณครับ</h1>

    <div class="min-h-screen grid grid-cols-3 gap-10 p-10">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="w-full h-65 object-cover rounded-sm shadow-md"
        alt="MODERN NETWORK workplace"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
// สร้าง array ของรูปภาพแบบอัตโนมัติถึง /modern/22.jpg
const images = Array.from({ length: 33 }, (_, i) => `/modern/${i + 1}.jpg`);
</script>
