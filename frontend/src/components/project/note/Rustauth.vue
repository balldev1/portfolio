<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Rust Auth
    </h1>

    <span
      class="text-gray-300 text-sm text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-sm text-balance">
      rust-auth-api/ <br />
      ├── Cargo.toml # ไฟล์ที่ใช้ในการกำหนด dependencies สำหรับโปรเจค Rust
      <br />
      ├── .env # ไฟล์ที่ใช้เก็บค่า environment variables เช่น DATABASE_URL,
      JWT_SECRET <br />
      ├── src/ <br />
      │ ├── main.rs # จุดเริ่มต้นของโปรเจค Actix-web <br />
      │ ├── config.rs # โหลดค่าจากไฟล์ .env เช่น DATABASE_URL และ JWT_SECRET
      <br />
      │ ├── db.rs # ฟังก์ชันที่ใช้เชื่อมต่อกับ MongoDB <br />
      │ ├── models/ <br />
      │ │ └── user.rs # โครงสร้างข้อมูล User ซึ่งประกอบด้วย username และ
      password_hash <br />
      │ ├── handlers/ <br />
      │ │ └── auth.rs # ฟังก์ชันสำหรับการสมัครสมาชิก (register)
      และการเข้าสู่ระบบ (login) <br />
      │ ├── routes/ <br />
      │ │ └── mod.rs # ตั้งค่าการกำหนดเส้นทาง (routes) สำหรับ API เช่น /register
      และ /login <br />
      │ ├── utils/ <br />
      │ │ └── jwt.rs # ฟังก์ชันที่ใช้สร้างและตรวจสอบ JWT <br />
      └── └── jwt.rs # ฟังก์ชันที่ใช้ในการสร้าง/ตรวจสอบ JWT สำหรับการเข้าระบบ
      <br />
    </span>

    <div class="mt-5 flex flex-col gap-5">
      <img src="/project/rustauth1.png" loading="lazy" />
      <img src="/project/rustauth2.png" loading="lazy" />
    </div>
  </div>
</template>
