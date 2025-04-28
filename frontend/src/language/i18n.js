import { createI18n } from "vue-i18n";

const messages = {
  th: {
    Explorer: "พอร์ต",
    Home: "หน้าแรก",
    Project: "โปรเจค",
    Note: "โน้ต",
    Portfolio: "แฟ้มผลงาน",
    changeLang: "เปลี่ยนภาษา",
    currency: "สกุลเงิน",
    wireless_guru: "ไวเลสกูรู",
    ss_it: "เอสเอสไอที",
    pokemon: "โปเกมอน",
    modern_network: "โมเดลเน็ตเวิร์ก",
    tr069: "ระบบเร้าเตอร์",
    weight: "ระบบชั่งน้ำหนักปุ๋ย",
    door: "ระบบประตู",
    orderfood: "ระบบสั่งอาหาร",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
