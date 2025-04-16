import { createI18n } from "vue-i18n";

const messages = {
  th: {
    hello: "สวัสดี",
    changeLang: "เปลี่ยนภาษา",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "th",
  fallbackLocale: "en",
  messages,
});

export default i18n;
