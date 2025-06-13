<template>
  <div class="flex flex-col gap-4 w-full">
    <h1 class="text-4xl underline underline-offset-8 font-semibold">
      Computer Architecture
    </h1>

    <span
      class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
    >
      สรุปตามความเข้าใจ
    </span>

    <span class="text-gray-300 text-md text-balance">
      <br />
      หัวใจของสถาปัตยกรรมคอมพิวเตอร์
      <br />
      <br />
      - CPU เปรียบเหมือน สมอง ที่คิดและตัดสินใจ ประมวลผลคำสั่ง จากโปรแกรมต่าง ๆ
      แล้วสั่งให้ส่วนอื่น ๆ ทำงานตามนั้น เช่น อ่านข้อมูลจากหน่วยความจำ,
      แสดงผลบนหน้าจอ หรือส่งข้อมูลออกไปยังอุปกรณ์อื่น
      <br />
      <br />
      - รีจิสเตอร์ (Register) เป็นเหมือนโต๊ะวางของที่ CPU หยิบมาใช้ทันที
      วงจรไฟฟ้าขนาดเล็กภายใน CPU พื้นที่เก็บข้อมูลขนาดเล็กใน
      CPUเก็บข้อมูลชั่วคราวที่ต้องใช้งานทันที ที่ใช้บ่อยมาก เช่น
      ตัวเลขที่ใช้คำนวณ <br />
      ACC (Accumulator): เก็บผลลัพธ์จากการคำนวณ <br />
      PC (Program Counter): ชี้ไปยังคำสั่งถัดไปในหน่วยความจำ <br />
      IR (Instruction Register) เก็บคำสั่งที่กำลังทำอยู่ <br />
      MAR, MDR: ใช้ติดต่อกับหน่วยความจำ
      <br />
      <br />
      - หน่วยความจำ (Memory) เป็นเหมือนโต๊ะวางของที่
      ที่เก็บข้อมูลโปรแกรม/ข้อมูลในระยะกลาง<br />
      เก็บโปรแกรมที่รันอยู่ทั้งที่ที่ยังไม่ได้ส่งออกหรือบันทึก Cache , RAM ,
      Storage (Disk, SSD, HDD) คือหน่วยความจำที่เก็บข้อมูล ถาวร เมื่อรันโปรแกรม
      ชุดคำสั่งจาก Storage จะถูกโหลดเข้า RAM ก่อน แล้ว CPU จะเรียกข้อมูลจาก RAM
      หรือ Cache ไปประมวลผล ถ้าเคยเรียกแล้วจะใช้ cache ถ้าไม่เคยจะ ใช้ ssd
      <br />
      <br />
      - ชุดคำสั่ง (Instruction Set) คือ “สั่งให้ CPU ทำงาน โดยใช้ภาษาที่ CPU
      เข้าใจ” เป็นภาษาเลขฐานสอง (Binary) ที่ประกอบด้วย 0 และ 1 เท่านั้น ,
      ภาษาแอสเซมบลี , ภาษาโปรแกรมระดับสูง เขียนง่ายสำหรับมนุษย์ แต่ CPU
      ไม่เข้าใจโดยตรง ต้องแปลงผ่าน Compiler หรือ Interpreter
      ให้เป็นภาษาเครื่องก่อน <br />
      <br />
      เช่น LOAD: โหลดข้อมูลจาก memory ไปใส่ register<br />
      ADD: บวกค่าระหว่าง register<br />
      STORE: เก็บค่าจาก register ลง memory <br />JMP: กระโดดไปยังคำสั่งอื่น
      (ควบคุมการไหลของโปรแกรม)
    </span>

    <span class="text-gray-300 text-md text-balance">
      - ระบบปฎิบัติการ Scalar Processor ทำงานทีละข้อมูลทีละคำสั่ง (ทีละตัว)
      งานทั่วไปที่ต้องการความแม่นยำทีละค่า เช่น โปรแกรมพื้นฐาน <br />
      <br />
      - ระบบปฎิบัติการ Vector Processor คือ
      ทำคำสั่งเดียวกับข้อมูลหลายชุดพร้อมกัน เหมาะกับงานที่ต้องประมวลผลข้อมูลซ้ำ
      ๆ เยอะ ๆ เช่น งานที่ต้องประมวลผลข้อมูลจำนวนมาก เช่น การบีบอัดภาพ,
      วิทยาศาสตร์ <br />
      <br />
      - ระบบปฎิบัติการ Parallel Processor คือ
      ทำงานได้ทีละหลาชุดคำสั่งพร้อมกันได้ เช่น งานหลายโปรแกรมพร้อมกัน เช่น
      เล่นเพลง + โหลดไฟล์ + เปิดเว็บ
      <br />
      <br />
      สมัยนี้ ไม่ได้ใช้แค่แบบใดแบบหนึ่ง แต่ใช้ทั้ง Parallel และ Vector ร่วมกัน
      เพื่อให้ได้ประสิทธิภาพสูงสุดครับ
    </span>

    <span class="text-gray-300 text-md text-balance">
      - ทรานซิสเตอร์อยู่ในวงจรไฟฟ้าภายในชิปคอมพิวเตอร์ ทำหน้าที่
      เปิด-ปิดการไหลของกระแสไฟฟ้า เหมือนสวิตช์ การเปิด-ปิดนี้แทนค่า บิต (bit)
      ซึ่งก็คือ 0 กับ 1 ในระบบไบนารี่ ด้วยการรวมทรานซิสเตอร์หลายล้านตัว
      ทำให้คอมพิวเตอร์สามารถเก็บข้อมูลและประมวลผลคำสั่งเป็นภาษาไบนารี่ได้
      <br />
      <br />
      บิต (1/0) → ถูกเก็บในรีจิสเตอร์/หน่วยความจำ<br />
      → CPU อ่านชุดคำสั่ง <br />→ ALU ประมวลผลถ้าจะไปเอารูปที่ไดร์ D<br />
      -> จะไปถามหาไฟลที่ Cache ก่อนถ้า Cache ไม่มี และ Ram ไม่มี จะไป จะสั่งให้
      โหลดข้อมูล<br />จากฮาร์ดดิสก์ (Storage) มาเก็บไว้ใน RAM และ Cache
      เพื่อใช้ครั้งถัดไป จากนั้น<br />
      → ผลลัพธ์จะถูกเก็บหรือส่งออก → CPU อ่านคำสั่งถัดไป → ทำซ้ำ
      <br />
      <br />
      โครงสร้างคอมพิวเตอร์ 4 ส่วนสำคัญ <br />CPU สมองของคอมพิวเตอร์
      ทำหน้าที่ประมวลผลคำสั่ง,<br />
      Memory เช่น RAM, Cache, และ Storage (ฮาร์ดดิสก์, SSD), <br />
      Input อุปกรณ์ที่รับข้อมูลเข้าสู่คอมพิวเตอร์ เช่น คีย์บอร์ด เมาส์ กล้อง ,
      <br />
      Output อุปกรณ์ที่แสดงผลลัพธ์จากการประมวลผล เช่น หน้าจอ พรินเตอร์ ลำโพง
    </span>

    <span class="text-gray-300 text-md text-balance">
      - วงรอบคำสั่ง CPU (Instruction Cycle)
      <br />
      <br />
      Fetch (ดึงคำสั่ง) ไปเอาคำสั่งจากหน่วยความจำ เช่น เลข 1010
      <br />
      Decode (ถอดรหัสคำสั่ง) CPU ถอดรหัส 1010 ใน IR ว่าต้องทำอะไร เช่น บวก ลบ
      หรือโหลดข้อมูล
      <br />
      Execute (ประมวลผลคำสั่ง) ทำงานตามคำสั่ง เช่น คำนวณใน ALU
      หรืออ่าน/เขียนข้อมูลในหน่วยความจำ
      <br />
      Store/Write back (เก็บผลลัพธ์)
      ผลลัพธ์จากการประมวลผลอาจถูกเก็บในรีจิสเตอร์หรือหน่วยความจำ
      <br />
      Update PC (อัปเดต Program Counter) ปรับค่า PC ให้ชี้ไปยังคำสั่งถัดไป
      เพื่อเตรียม Fetch รอบใหม่
    </span>

    <span class="text-gray-300 text-md text-balance">
      - System Bus (Address, Data, Control) จะถูกใช้งานในแต่ละรอบของ Instruction
      Cycle (วงรอบคำสั่งของ CPU) โดยเฉพาะใน ขั้นตอน Fetch, Execute, Store
      <br />
      <br />
      Address Bus (บัสที่อยู่) = บอกตำแหน่งของข้อมูลในหน่วยความจำ (เช่น
      บ้านเลขที่ 1024)
      <br />
      Data Bus (บัสข้อมูล) = ขนข้อมูลจริงที่จะอ่านหรือเขียน (เช่น ตัวเลข 99,
      ข้อความ “Hello”)
      <br />
      Control Bus (บัสควบคุม) = บอกว่า CPU จะ ทำอะไรกับข้อมูลนั้น เช่น Read ,
      Write , Wait , Reset
      <br />
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/systembus.webp"
        loading="lazy"
        class="h-96"
        alt="computerarchitecture"
      />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/computerarchitecture.webp"
        loading="lazy"
        class="h-96"
        alt="computerarchitecture"
      />
    </div>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/4com.webp"
        loading="lazy"
        class="h-96"
        alt="computerarchitecture"
      />
    </div>

    <div class="py-5">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/HxL3Uxib_Dw?si=2cF8RdcOJ4A6ZWKG"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
