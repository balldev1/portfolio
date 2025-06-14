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
      <br />
      <br />
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
      เพื่อให้ได้ประสิทธิภาพสูงสุด
      <br />
      <br />
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
      <br />
      <br />
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
      <br />
      <br />
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
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - Encrypt เข้ารหัสแบบปลอดภัยเช่น jwt โดยใช้ secret key เพื่อปกป้องข้อมูล
      <br />
      - Decrypt ถอดรหัสแบบปลอดภัย โดยมี secrt key ถึงจะถอดรหัสได้
      <br />
      - Encode แปลงข้อมูลให้อยู่ในรูปแบบที่ส่งผ่านระบบได้ เช่น Base64 หรือ URL
      Encoding เพราะบางตัวอักษรใน URL มีความหมายพิเศษ เช่น สัญลักษณ์พิเศษ เช่น
      @, #, %, =, ', ", +, ฯลฯ
      <br />
      - Decode แปลงกลับข้อมูลที่ถูก encode โดยไม่ต้องใช้กุญแจ (ใครก็ decode ได้)
      เพราะ
      <br />
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - คอมพิวเตอร์ อยุ่ในรูปแบบสัญญาณทางไฟฟ้า
      สิ่งเดียวที่คอมพิวเตอร์เข้าใจได้คือ สัญญาณไฟฟ้า
      คอมพิวเตอร์สื่อสารกันภายในด้วย วงจรอิเล็กทรอนิกส์
      <br />
      0 = false (ไม่มีไฟ) 1 = ture (มีไฟ) เรียกระบบนี้ว่า Binary System หรือ
      เลขฐานสอง
      <br />
      เช่น A → ถูกแปลงเป็น → 01000001 (เลขฐานสองของ A ตาม ASCII)
      คือภาษาที่คอมพิวเตอร์เข้าใจ
      <br />
      <br />
      - ภาษาระดับสูง คือเช่น ภาษา c , c++ มนุษย์เข้าใจง่ายต้องใช้ Compiler หรือ
      Interpreter แปลงเป็นภาษาเครื่อง เพื่อให้คอมพิวเตอร์เข้าใจ
      <br />
      - ภาษาระดับต่ำ คือ เช่น: Assembly Language และ Machine Code (Binary 0/1)
      เพราะเป็นภาษาเครื่องโดยตรง (CPU เข้าใจได้เลย) มนุษย์เข้าใจยาก
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - ส่วนประกอบของคำสั่ง (Instruction Format) คือโครงสร้างของคำสั่งที่ CPU
      ใช้ในการทำงาน โดยแต่ละคำสั่งจะประกอบด้วย ส่วนย่อย ๆ ที่บอกว่า CPU
      ต้องทำอะไร กับข้อมูลไหน
      <br />
      Opcode ระบุว่าเป็นคำสั่งอะไรที่ CPU ต้องทำ
      <br />
      Operand ข้อมูลที่จะนำมาใช้กับคำสั่ง เช่น รีจิสเตอร์ หรือค่าคงที่
      <br />
      Addressing Mode วิธีเข้าถึงข้อมูล เช่น ทางตรง, ทางอ้อม, ผ่านรีจิสเตอร์ ฯลฯ
      <br />
      Source และ Destination ต้นทางและปลายทางของข้อมูลในคำสั่งนั้น ๆ (เช่น
      ย้ายข้อมูลจาก A ไป B)
      <br />
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - โครงสร้างพื้นฐานcpu
      <br />
      CPU = ร่างกายของคน<br />
      ALU = สมอง ที่คิดเลขและตัดสินใจ
      <br />
      Registers = ความจำระยะสั้น เก็บข้อมูลที่ต้องใช้ตอนนี้ทันที
      <br />
      Control Unit (CU) = เส้นประสาท สั่งการส่วนต่าง ๆ ให้ทำงานประสานกัน
      <br />
      Cache = ความจำเก่า ๆ ที่สมองเก็บไว้ใกล้ตัว
      ใช้เรียกกลับมาทำงานได้เร็วกว่าไปขุดข้อมูลใหม่
      <br />
      Buses = หลอดเลือด เส้นทางส่งสารอาหาร (ข้อมูล) ไปมาในร่างกาย (CPU
      กับหน่วยความจำ/อุปกรณ์อื่น ๆ)
      <br />
      RAM = เป็น หน่วยความจำหลัก (Main Memory) ของคอมพิวเตอร์เปรียบเหมือน
      โต๊ะทำงาน ที่เก็บของใช้ตอนทำงาน เพื่อให้หยิบใช้ได้ง่าย
      <br />
      IO = อุปกรณ์รับข้อมูลเข้าและส่งข้อมูลออก จากคอมพิวเตอร์
      <br />
      <br />
    </span>

    <span class="text-gray-300 text-md text-balance">
      - Interrupt คือสัญญาณแจ้งเตือนจากอุปกรณ์หรือโปรแกรมมายัง CPU เพื่อบอกว่า
      มีเหตุการณ์สำคัญเกิดขึ้น ต้องหยุดสิ่งที่กำลังทำอยู่ชั่วคราว
      แล้วไปจัดการกับสิ่งนี้ก่อน
      <br />
      Interrupt ช่วยให้ CPU ทำงานแบบ ตอบสนองแบบทันที กับเหตุการณ์ต่าง ๆ
      <br />
      Interrupt ทำให้ CPU ไม่ต้องเสียเวลาตรวจสอบตลอดเวลาว่ามีการกดปุ่มหรือไม่
      (polling) CPU จะรู้ทันทีเมื่อมีเหตุการณ์สำคัญ
      <br />
      เช่น กดคีย์บอร์ด → ส่ง interrupt ให้ CPU รู้ว่ามีข้อมูล
      แล้วแสดงข้อมูลออกมาทางหน้าจอ
      <br />
      <br />
    </span>

    <div class="my-5 flex flex-col gap-5">
      <img
        src="/project/cpu.webp"
        loading="lazy"
        class="h-96"
        alt="computerarchitecture"
      />
    </div>

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

<script setup>
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Computer Architecture",
  description: "CPU,Register,Memory,Instruction Set",
  keywords: "Computer Architecture",
  url: "https://portfolio-frontend-ten-steel.vercel.app/",
});
</script>
