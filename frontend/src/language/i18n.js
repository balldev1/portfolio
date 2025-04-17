import { createI18n } from "vue-i18n";

const messages = {
  th: {
    Explorer: "พอร์ต",
    Home: "หน้าแรก",
    Project: "โปรเจค",
    Note: "โน้ต",
    Portfolio: "แฟ้มผลงาน",
    changeLang: "เปลี่ยนภาษา",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
