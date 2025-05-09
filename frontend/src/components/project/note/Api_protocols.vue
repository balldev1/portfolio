<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Api Protocols
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      การสื่อสารระหว่างระบบในแบบ client-server หรือ service-to-service
      <br />
      <br />
      REST เปรียบเทียบง่ายๆ: เหมือนเดินเข้าไปร้านแล้วถามว่า
      “ขอข้อมูลสินค้าชิ้นที่ 123” (client) แล้วรอพนักงานหาข้อมูล (server) มาให้
      <br />
      <br />
      GraphQL เปรียบเทียบง่ายๆ: เหมือนสั่งอาหาร (client) แล้วบอกว่า
      “เอาแค่ข้าวกับไข่ ไม่เอาน้ำซุป” พ่อครัว (server)
      จะทำให้เฉพาะสิ่งที่คุณสั่ง เหมาะกับ frontend ที่ต้องการข้อมูลเฉพาะ
      <br />
      <br />
      #ข้อสังเกต REST mongodb aggreagate ก็ทำได้ในการแยกข้อมูล ทำไมต้องใช้
      GraphQL
      <br />
      <br />
      MongoDB Aggregation: ทำในฝั่ง Server (โดย Backend
      ใช้จัดการข้อมูลในฐานข้อมูล)
      <br />
      <br />
      GraphQL: Client สามารถ “ระบุ” ได้ว่าต้องการข้อมูลอะไร ก่อนส่งคำขอไปที่
      Server เพื่อให้ Server ดำเนินการ
      <br />
      <br />
      gRPC เปรียบเทียบง่ายๆ: เหมือนส่งโน้ตย่อกระชับระหว่างทีมงาน (server)
      แบบไม่ต้องพูดเยอะ ใช้ภาษารหัสเฉพาะ ทำงานเร็วกว่า REST เหมาะกับระบบภายใน /
      microservices
      <br />
      <br />
      WebSockets เปรียบเทียบง่ายๆ: เหมือนโทรศัพท์คุยกับเพื่อน ทั้งสองฝ่าย
      (client1) -> webhook, server <- (client2) พูดโต้ตอบกันสดๆ
      ไม่ต้องวางสายก่อนถึงจะตอบอีกฝ่ายได้ เหมาะกับ Chat, Notification, Game
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img src="/project/api_protocols.webp" loading="lazy" class="" />
    </div>
  </div>
</template>
