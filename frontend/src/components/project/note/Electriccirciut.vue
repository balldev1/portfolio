<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Electric Circiut
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      - อุปกรณ์ทางไฟฟ้ามี 2 ประเภท <br />
      <br />
      - Voltage Source เหมือนออกแรงพลัก (แหล่งจ่ายแรงดันไฟฟ้า) คือ
      อุปกรณ์ที่พยายาม รักษาระดับแรงดัน (Voltage) คงที่ระหว่างขั้วสองขั้วของมัน
      ไม่ว่าจะมีกระแสไหลมากน้อยแค่ไหน เช่น แบตเตอรี่, อะแดปเตอร์
      <br />
      - Current Source (แหล่งจ่ายกระแสไฟฟ้า) คือ อุปกรณ์ที่พยายาม
      รักษาระดับกระแส (Current) คงที่ที่ไหลผ่านวงจร ไม่ว่าจะมีแรงดันเท่าไร เช่น
      วงจรชาร์จ LED
      <br />
      <br />
      เพราะอุปกรณ์ไฟฟ้าในโลก ไม่ได้ต้องการเหมือนกันหมด
      บางอย่างต้องใช้แรงดันคงที่ <br />
      บางอย่างต้องการกระแสคงที่ ถ้ามีแค่แบบเดียว วงจรหลายประเภท จะทำงานผิดพลาด
      หรือพัง
      <br />
      เช่น Voltage โน้ตบุ๊ก, พัดลม, ลำโพง ต้องการแรงดันสูงในการเปิดเครื่อง
      <br />
      เช่น Current LED, Transistor bias, เซ็นเซอร์บางประเภท
      ไม่ได้ต้องการแรงดันสูงแค่มีไฟในกระแส
      <br />
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - ตัวจ่ายพลังงาน (Source) ให้แรงดันไฟฟ้าหรือกระแสไฟฟ้าเข้าสู่โหลด
      ทำให้โหลดสามารถทำงานได้ เช่น แบตเตอรี่, หม้อแปลง
      <br />
      - ตัวรับพลังงาน (Load) คืออุปกรณ์หรือส่วนของวงจรที่ รับพลังงานไฟฟ้า
      (Source) เช่น หลอดไฟ, มอเตอร์ มาใช้
      <br />
      <br />
      - แบบอิสระ เป็นแหล่งจ่ายไฟที่ ให้แรงดันหรือกระแสคงที่ตามค่าที่กำหนดไว้
      โดยไม่ขึ้นกับส่วนอื่นในวงจร เช่น แบตเตอรี่ 9V, แหล่งจ่ายไฟ 5V คงที่
      <br />
      - แบบไม่อิสระ เป็นแหล่งจ่ายไฟที่
      ค่าของแรงดันหรือกระแสจะขึ้นอยู่กับสัญญาณอื่นในวงจร เช่น Voltage Controlled
      Voltage Source (VCVS), Current Controlled Current Source (CCCS)
      <br />
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - Resistive Load (โหลดตัวต้านทาน)
      ใช้แปลงไฟฟ้าเป็นความร้อนหรือพลังงานใช้งาน ใช้ในเครื่องใช้ไฟฟ้าทั่วไป
      กระแสและแรงดัน อยู่ในเฟสเดียวกัน เช่น หม้อต้มน้ำไฟฟ้า
      <br />
      <br />
      - Inductive Load (โหลดเหนี่ยวนำ) สร้างสนามแม่เหล็ก และการทำงานของมอเตอร์
      สำคัญกับเครื่องจักรและระบบไฟฟ้า กระแสจะ ล่าช้ากว่าแรงดัน เช่น
      มอเตอร์ไฟฟ้าในเครื่องจักร
      <br />
      <br />
      - Capacitive Load (โหลดความจุ) เก็บพลังงานไฟฟ้าระยะสั้นในรูปสนามไฟฟ้า
      (ไฟฟ้าสถิต) และสามารถปล่อยคืนได้ กระแสจะ นำหน้าแรงดัน
      <br />
      Capacitive Load คือ ถังพักไฟ พอไฟมา → มันดูดไว้ ไฟตก → มันปล่อยคืน
      ช่วยให้วงจรไฟฟ้า นิ่ง เสถียร ไม่พังง่าย
      <br />
      เช่น ปลั๊กกรองไฟ (Power Strip) มีตัวเก็บประจุกรองไฟกระชาก
      ช่วยป้องกันคอมพัง
      <br />
      หลอดไฟ LED มีตัวเก็บประจุในวงจรเพื่อให้แสงไม่กะพริบ
    </span>

    <span class="text-gray-300 text-md text-balance">
      - Ohm’s Law (กฎของโอห์ม) คือ กฎพื้นฐานในวงจรไฟฟ้า
      ใช้บอกความสัมพันธ์ระหว่าง แรงดันไฟฟ้า (Voltage), กระแสไฟฟ้า (Current) และ
      ความต้านทาน (Resistance)
      <br />
      - สูตรของ Ohm’s Law จำง่ายๆใช้กฎ 3เหลี่ยมหาค่าไหนปิดค่านั้น <br />หา v ปิด
      v เอาตัวล่างที่เหลือมาคูณ <br />หา i ปิด i เอาตัวบนตัวล่างมาหาร
      <br />
      V = แรงดันไฟฟ้า (Volt, หน่วยเป็น V)
      <br />
      I = กระแสไฟฟ้า (Ampere, หน่วยเป็น A)
      <br />
      R = ความต้านทาน (Ohm, หน่วยเป็น Ω)
      <br />
      * P กำลังไฟฟ้า (w)
      <br />
      ถ้า ความต้านทาน (load) กระแส i จะไหล จาก + ไป -
      <br />
      ถ้า ความจ่ายไฟ (source) กระแส i จะไหล จาก - ไป +
      <br />
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - กำลังไฟฟ้าจ่าย (Power Supplied) เกิดจากแหล่งจ่ายไฟ จะไหล - ไป +
      <br />
      - กำลังไฟฟ้าดูดกลื่น (Power Absorbed) เกิดจากได้ทั้งแหล่งจ่ายและ load
      จะไหล + ไป -
    </span>

    <span class="text-gray-300 text-md text-balance">
      หาค่า i (กระแส) สูตร i = v / r
      <br />
      หาค่า g (ความนำ) สูตร g = 1 / r
      <br />
      หาค่า p (กำลังไฟ) สูตร p = i x v
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      Absorb = การดูดซับพลังงานไฟฟ้า ใช้กับอุปกรณ์ที่ รับพลังงานไฟฟ้าเข้ามา เช่น
      หลอดไฟ
      <br />
      Delivery = การส่งหรือจ่ายพลังงานไฟฟ้า ใช้กับแหล่งจ่ายไฟ เช่น โรงไฟฟ้า
      <br />
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/elec1.webp"
        loading="lazy"
        class="h-full"
        alt="cache"
      />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/elec2.webp"
        loading="lazy"
        class="h-full"
        alt="cache"
      />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/elec3.webp"
        loading="lazy"
        class="h-full"
        alt="cache"
      />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/elec4.webp"
        loading="lazy"
        class="h-full"
        alt="cache"
      />
    </div>

    <div class="py-5">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/omLOf-TICvo?si=E0bYpWzUJY2sFfS3"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Cache memory concept application",
  description: "Cache,Client,Server",
  keywords: "Cache,Client,Server",
  url: "https://portfolio-frontend-ten-steel.vercel.app/",
});
</script>
