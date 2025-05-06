<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      lifecycle
    </span>

    <span class="text-gray-300 leading-8">
      Mounting (เริ่มต้น) = เกิดขึ้น ครั้งแรก ที่ component ถูกเรียกใช้ เช่น
      กดลิงก์เข้า /product <br />[ สร้าง instance ของ component, รับ props,
      render template/DOM, แสดงผลบนหน้า ] <br />
      Updating (อัปเดต) = ค่า props เปลี่ยน ค่า state / reactive data เปลี่ยน
      Component จะ re-render เพื่ออัปเดตข้อมูลใหม่ให้ user เห็น <br />
      Unmounting (สิ้นสุด) = Component ถูกลบออกจาก DOM เช่น user เปลี่ยนหน้า,
      ปิด tab, ลบ DOM ด้วยเงื่อนไขต่างๆ
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/lifecycle.webp" loading="lazy" class="w-[40rem]" />
    </div>
  </div>
</template>
