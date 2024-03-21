var en = require("./en.json");
var ru = require("./ru.json");

const i18n = {
  translations: {
    ru,
    en,
  },
  defaultLang: "ru",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;