<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Spanning Tree
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />นึกถึงวงเวียนที่มีรถเข้าออก <br />
      รถ = ข้อมูล (Packet) <br />
      วงเวียน = เครือข่ายที่เชื่อมต่อแบบลูป (Loop) <br />
      รถวิ่งวนในวงเวียนไม่หยุด = ข้อมูล Broadcast วิ่งวนไม่รู้จบ <br />

      รถเริ่มเข้ามามากขึ้นก็เหมือนข้อมูลเข้ามามากขึ้น → รถติด → จอดนิ่ง = เกิด
      Broadcast Storm → เครือข่ายล่ม
      <br />
      <br />
      Spanning Tree ทำหน้าที่ เลือกเส้นทางหลักและปิดเส้นทางลูป
      ให้รถเข้า-ออกได้ไม่เกิดการลูปในวงเวียน
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/spanningtee.webp"
        loading="lazy"
        class=""
        alt="Publish (topic) / Subscribe (sub)"
      />
    </div>
  </div>
</template>
