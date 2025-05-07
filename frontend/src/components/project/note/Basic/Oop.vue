<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      Oop
    </span>

    <span class="text-gray-300 leading-8">
      แนวคิดการเขียนโปรแกรมเชิงวัตถุ<br />
      Class (คลาส) – แม่แบบของวัตถุ เช่น class Car คือแม่แบบของรถ <br />
      Object (อ็อบเจ็กต์) – เอา class ต้นแบบไปสร้าง เช่น { "car1" : "audi"} , {
      "car2" : "toyota"} คือ car2 = toyota
      <br />
      Encapsulation (การห่อหุ้มข้อมูล) เช่น ซ่อน password ไว้ในคลาส ถ้าไม่มี
      method ก็เข้าถึงไม่ได้ เช่นเงื่อนไข if ถ้าไม่ login
      ก็เข้าถึงข้อมูลไม่ได้<br />
      Inheritance (การสืบทอด) – class ลูกสามารถสืบคุณสมบัติจาก class พ่อแม่ได้
      เช่น car1 เป็น รถ เราสามารถ เอา car1 มี ระบบชาร์จไฟฟ้า , กับ car1
      มีระบบน้ำมันได้ แยกกันได้โดยใช้แม่แบบ car1 <br />
      Polymorphism (พหุสัณฐาน) – การใช้ method เดียวกันในหลายแบบ เช่น drive()
      ของรถธรรมดา กับ drive()
      ของรถไฟฟ้าทำงานต่างกันเช่นรถไฟฟ้ามีระบบหมุนกระไฟฟ้า รถแบบธรรมดาระบบหมุน
      กระจกแมนนวล
      <br />
      Abstraction (นามธรรม) – ผู้ใช้งานรถกดแค่ปุ่ม "Start"
      แต่ไม่ต้องรู้ว่าภายในเครื่องยนต์ทำงานยังไง<br />
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/oop.png" loading="lazy" class="w-full h-96" />
    </div>
  </div>
  <div className="divider "></div>
</template>
