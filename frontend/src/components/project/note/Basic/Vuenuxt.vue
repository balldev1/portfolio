<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      Vue vs Nuxt
    </span>

    <span class="text-gray-300 leading-8">
      vue ไม่มี router ในการ ไปหน้า page ต่าง ๆ <br />
      nuxt มี page auto ในการทำ หน้าต่าง เช่น product.page <br />
      vue ไม่รองรับ backend โดยตรงในการติดต่อ database ต้องสร้าง backend เช่น
      nestjs หรือ laravel <br />
      nuxt รองรับ API ในตัว สามารถทำ fullstck ได้ ในการติดต่อ database
      เอาข้อมูลมาใช้<br />
      vue ไม่มี SSR/SEO SSR (Server-Side Rendering) คือการ "เรนเดอร์ HTML
      บนเซิร์ฟเวอร์" <br />
      ก่อนส่งให้เบราว์เซอร์ nuxt มี ช่วยให้เว็บติดอันดับ seo
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/vuenuxt.png" loading="lazy" class="w-[40rem]" />
    </div>
  </div>
</template>
