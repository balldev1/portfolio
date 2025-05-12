<template>
  <div class="flex gap-6 w-full">
    <!-- เนื้อหาหลัก -->
    <div class="flex-1 flex flex-col gap-4 pb-10">
      <main class="text-4xl underline underline-offset-8 font-semibold">
        Network (เครือข่าย)
      </main>

      <h2 class="text-gray-300 leading-8">
        การเชื่อมต่อระหว่างอุปกรณ์สองเครื่องขึ้นไป (เช่น คอมพิวเตอร์ มือถือ
        เราเตอร์ เซิร์ฟเวอร์ ฯลฯ) เพื่อแลกเปลี่ยนข้อมูลและทรัพยากรร่วมกัน เช่น
        อินเทอร์เน็ต ไฟล์ ปริ้นเตอร์ หรือฐานข้อมูล
      </h2>

      <span
        class="text-gray-300 text-lg text-balance mt-2 badge p-4 shadow shadow-gray-500"
      >
        สรุปตามความเข้าใจ
      </span>

      <div class="mt-5 flex flex-col gap-5 w-full items-center">
        <img
          src="/project/layer.webp"
          loading="lazy"
          alt="vue"
          class="w-full h-96"
        />
      </div>

      <!-- feature  -->
      <div ref="basicRef">
        <div class="flex flex-col gap-4">
          <h2
            class="text-gray-950 border-none text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
          >
            Basic network
          </h2>
          <h2 class="text-gray-300 leading-8">
            OSI Model (7 Layer) <br />
            1. Physical: รับส่งสัญญาณจริง (Fiber, Wi-Fi) <br />
            2. Data Link: การเชื่อมต่อทางกายภาพ (Ethernet, MAC) <br />
            3. Network: กำหนดเส้นทางข้อมูล (IP, ICMP) <br />
            4. Transport: ส่งข้อมูลอย่างมีประสิทธิภาพ (TCP, UDP) <br />
            5. Session: จัดการการเชื่อมต่อระหว่างเครื่อง <br />
            6. Presentation: เข้ารหัส/ถอดรหัสข้อมูล (SSL/TLS) <br />
            7. Application: การสื่อสารกับผู้ใช้ (HTTP, FTP, SMTP) <br /><br />
            IP Address คือ หมายเลขอุปกรณ์ ในเครื่องข่าย เช่น ถ้าในเครือข่ายมี วง
            192.168.1.0/24 (วงที่เราเชื่อมเข้าไปเหมือนจุดศูนย์กลางที่ทุก
            คนต้องเข้าที่นี่) → หมายความว่า อุปกรณ์ในวงนี้จะมี IP ตั้งแต่
            192.168.1.1 ถึง 192.168.1.254 IP ต้องไม่ซ้ำกันในวงเดียวกัน
            ไม่งั้นชนกัน (conflict) <br /><br />
            HTTP ไม่มีการเข้ารหัสข้อมูล เช่น เหมือน ประตูบ้านเปิดโล่ง —
            ใครก็เดินเข้ามา/แอบดูข้อมูลที่ส่งผ่านได้ <br />
            HTTPS มีการเข้ารหัส (SSL/TLS) เช่น เหมือน ประตูบ้านล็อกด้วยกุญแจ —
            คนอื่นเห็นว่าคุณสื่อสารอยู่ แต่ ไม่รู้ว่าคุณพูดอะไร <br /><br />
            HTTP status code <br />
            200 OK สำเร็จ เช่น api ดึงข้อมูลสำเร็จ<br />
            201 Created เช่น สร้าง username สำเร็จ<br />
            400 Bad Request เช่น คำขอผิด<br />
            401 Unauthorized เช่น ยังไม่ล็อกอิน<br />
            403 Forbidden เช่น ไม่มีสิทธิเข้าถึง<br />
            404 Not Found เช่น เส้นทาง api ผิด <br />
            405 Method Not Allowed เช่น ห้ามใช้ method<br />
            500 Internal Server Error เช่น มีปัญหา server<br />
            502 Bad Gateway เช่น เกตเวย์เสีย <br />
            503 Service Unavailable เช่น ปิดปรับปรุง <br /><br />
            Gateway (เกตเวย์) คือ
            จุดผ่านของข้อมูลระหว่างเครือข่ายหนึ่งไปยังอีกเครือข่ายหนึ่ง เช่น
            ถ้าบ้านของคุณคือ “เครือข่ายภายใน” และถนนคือ “อินเทอร์เน็ต” Gateway =
            ประตูบ้านที่ข้อมูลต้องผ่านก่อนออกไปข้างนอก เช่น router 3bb
            ที่ทำให้เล่นเน็ตได้ <br /><br />
            DNS (Domain Name System) คือ "สมุดโทรศัพท์ของอินเทอร์เน็ต" ที่แปลง
            ชื่อเว็บไซต์ (เช่น google.com) ให้กลายเป็น IP Address
            ที่เครื่องคอมพิวเตอร์เข้าใจได้ <br />
            เช่น พิมพ์ www.google.com ในเบราว์เซอร์ -> DNS Server ตอบกลับ
            8.8.8.8 -> เครื่องคุณจึงใช้ IP นี้ เพื่อเชื่อมต่อไปยังเซิร์ฟเวอร์ของ
            Google <br />
            สรุป client -> www.google.com -> dns server(ได้ ip 8.8.8.8) ->
            server -> client (แสดงเว็บ google) <br /><br />
            Port คือ ประตูห้อง แล้ว IP Address คือบ้านเลขที่<br />
            (เช่น บ้านเลขที่ 192.168.1.10 → ห้อง 80 = เว็บ, ห้อง 22 = SSH)<br />
            80 HTTP (เว็บไม่เข้ารหัส)<br />
            443 HTTPS (เว็บแบบเข้ารหัส)<br />
            22 SSH (รีโมตเข้าเครื่อง)<br /><br />
            TCP
            ใช้ในกรณีที่ข้อมูลสำคัญและต้องการความมั่นใจว่าข้อมูลจะถึงปลายทางอย่างถูกต้อง
            เช่น การส่งอีเมลหรือการอัพโหลดไฟล์
            <br />
            UDP
            ใช้ในกรณีที่ต้องการส่งข้อมูลแบบรวดเร็วโดยไม่สนใจว่าข้อมูลจะถึงปลายทางหรือไม่
            เช่น การสตรีมมิ่ง การโทรผ่านอินเทอร์เน็ต <br /><br />
            Firewall เน้น การป้องกัน
            จากการเข้าถึงที่ไม่พึงประสงค์และภัยคุกคามจากภายนอก <br />
            Walled Garden ใช้ในการ จำกัดการเข้าถึงข้อมูลหรือบริการ
            ภายในเครือข่าย เช่น Wi-Fi
            สาธารณะหรือเครือข่ายที่มีการควบคุมการเข้าถึง<br /><br />
            Public IP: ที่อยู่ IP
            ที่ใช้ในการเชื่อมต่ออุปกรณ์กับอินเทอร์เน็ตและสามารถเข้าถึงได้จากทุกที่ในโลก<br />
            Private IP: ที่อยู่ IP
            ที่ใช้ภายในเครือข่ายที่ไม่สามารถเข้าถึงจากอินเทอร์เน็ตโดยตรง
            เพื่อการประหยัด IP และเพิ่มความปลอดภัย<br />
            NAT คือ การที่ใช้ในการแปลงที่อยู่ IP ภายใน (Private IP) เป็นที่อยู่
            IP ภายนอก (Public IP) และในทางกลับกัน ถูกใช้ใน Router
            เพื่อให้หลายอุปกรณ์ที่ใช้ Private IP
            สามารถแชร์การเชื่อมต่ออินเทอร์เน็ตโดยการใช้ Public IP ตัวเดียว
            <br /><br />
            VLAN คือ การแบ่งเครือข่ายเดียวออกเป็นหลายเครือข่ายย่อย ๆ
            โดยไม่ต้องใช้การแบ่งสายหรือฮาร์ดแวร์แยกต่างหาก
            บริษัทอาจแบ่งเครือข่ายเป็น 3 VLAN<br />
            VLAN 10 สำหรับฝ่ายการเงิน VLAN 20 สำหรับฝ่าย IT VLAN 30 สำหรับฝ่าย
            HR<br />
            การแบ่งนี้ช่วยให้ข้อมูลจากฝ่ายการเงินไม่สามารถเข้าถึงข้อมูลของฝ่ายอื่น
            ๆ ได้<br /><br />
            Spanning Tree Protocol เป็นโปรโตคอลที่ใช้ในเครือข่าย Ethernet
            เพื่อป้องกัน Loop ในการเชื่อมต่อสวิตช์หลายตัว
            หากเครือข่ายมีการเชื่อมต่อหลาย ๆ ทางระหว่างสวิตช์ STP<br />
            จะทำหน้าที่คำนวณและเลือกเส้นทางที่ดีที่สุดเพื่อหลีกเลี่ยงการวนลูปในเครือข่าย<br /><br />
            WLAN (Wireless Local Area Network):
            เครือข่ายท้องถิ่นที่ใช้การสื่อสารไร้สายเพื่อเชื่อมต่ออุปกรณ์ต่าง ๆ
            โดยไม่ต้องใช้สายเคเบิล<br /><br />
            DHCP DHCP จะ หาที่อยู่ IP และ Gateway
            ให้กับอุปกรณ์ในเครือข่ายโดยอัตโนมัติ ทำให้ไม่ต้องกำหนดที่อยู่ IP
            ด้วยมือในทุกอุปกรณ์
            และช่วยให้การจัดการเครือข่ายสะดวกและมีประสิทธิภาพยิ่งขึ้น เช่น หา
            gateway สำหรับออกเน็ต
          </h2>
        </div>
        <div className="divider "></div>
      </div>
    </div>

    <!-- เมนู sticky -->
    <div class="w-80 sticky top-24 self-start -balance">
      <button
        v-for="section in sections"
        :key="section.name"
        @click="scrollTo(section.name as SectionName)"
        :class="{
          'bg-gray-500 text-white': activeSection === section.name,
          'bg-white': activeSection !== section.name,
        }"
        class="btn btn-sm border-none text-black rounded m-1 hover:bg-gray-500 hover:text-white"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type SectionName = "basic" | "lifecycle" | "kernel";

const activeSection = ref<SectionName | null>(null);

const refsMap: Record<SectionName, any> = {
  basic: ref<HTMLElement | null>(null),
  lifecycle: ref<HTMLElement | null>(null),
  kernel: ref<HTMLElement | null>(null),
};

const sections: { name: SectionName; label: string }[] = [
  { name: "basic", label: "Basic" },
  { name: "lifecycle", label: "Lifecycle" },
  { name: "kernel", label: "Kernel" },
];

const scrollTo = (section: SectionName) => {
  activeSection.value = section;
  refsMap[section].value?.scrollIntoView({ behavior: "smooth" });
};

const basicRef = refsMap.basic;
const lifecycleRef = refsMap.lifecycle;
const kernelRef = refsMap.kernel;
</script>
