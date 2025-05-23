<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Seo Next.js
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      Ref : https://www.youtube.com/watch?v=wTGVHLyV09M&t=3s
    </span>

    <span>
      preview local -> https://docs.srv.us/ -> เอาลิ้งที่ได้ไป browser ->
      socialshare priviwe ตัวอย่างการแชร เพือดูว่าเวลา share
      รูปแบบเว็บขึ้นแบบไหนไหน
    </span>

    <span>
      metadata -> กำหนด title , description , openGraph , ->
      ระบุว่าเว็บไซคเกี่ยวกับอะไร
    </span>

    <span>
      metadata/{id} -> product/{id} , title , description , openGraph , ->
      ระบุว่าแต่ละหน้าเว็บไซคเกี่ยวกับอะไร เช่น สินค้า mikrotik , cisco ให้แบ่ง
      title กัน
    </span>

    <div class="my-5 flex flex-col gap-5 justify-center items-center">
      <img
        src="/project/seonext1.webp"
        loading="lazy"
        class="w-[40rem]"
        alt="seonext"
      />
    </div>

    <span>
      cache -> import { cache } from "react"; ->
      หน้าเว็บโหลดเร็วขึ้นเพราะไม่ต้องดึงข้อมูลหรือประมวลผลใหม่ทุกครั้ง ->
      <br />
      <br />
      เว็บเสถียรและพร้อมให้บริการตลอดเวลา ส่งผลดีต่ออันดับ SEO ->
      ถ้าข้อมูลเปลี่ยนบ่อย ควรเก็บ cache ไว้ไม่นาน (เช่น 5-15 นาที) ->
      <br />
      <br />
      ถ้าข้อมูลเปลี่ยนน้อย สามารถเก็บ cache ได้นานขึ้น
      (เป็นวันหรือสัปดาห์)</span
    >

    <span>
      sitemap.xml แจ้งรายการ URL ทั้งหมดให้ Google มาเก็บข้อมูลหน้าไหน “สำคัญ"
      กว่าหน้าอื่น → ด้วย priority หน้าไหนอัปเดตล่าสุดเมื่อไหร่ → ด้วย lastmod
      ควรให้ Google มาแวะบ่อยแค่ไหน → ด้วย changefreq
    </span>

    <span>
      robot.ts ก็คือเรากำหนด sitemap แล้ววกำหนดให้bot google เข้าไปหาไฟล sitemap
      ตามทีเรากำหนด เช่นให้ เข้าไปเก็บข้อมูลเฉพาะหน้า product แล้วเอา title
      ,description ไป ช่วย seo ตาม keywork ที่พิม
      <br />
      <br />
      index: false / no index ห้ามเอาหน้านี้ไปโชว์ใน Google follow: true
      แต่ให้ตามลิงก์ในหน้านี้ต่อไปได้ หมายถึเช่น dashboard กำนหนดให้ false
      อาจจะมี /dashboard/product อาจะมีข้อมูลสำคัญให้ seoได้
    </span>

    <span>
      Google Search Console ไว้ติดตามผลใครมาจากไหนอะไรยังไง ไปเอาไฟลมาจาก google
      แล้วมาใส่ ในเว็บเราจะแสดง สถิติต่างๆ และ keywork ที่พิม หรือ blacklink
      ที่พามาเว็บเราใช้ในการแก้ไข seo <br />
      https://search.google.com/search-console/about
    </span>

    <div class="py-5">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/wTGVHLyV09M?si=12cdIOirBqk5KPB9"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
