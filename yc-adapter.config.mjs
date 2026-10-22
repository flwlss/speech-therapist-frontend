import yandexCloudAdapter from "@yc-next/cli";

export default yandexCloudAdapter({
  functionName: "afaziolog-nesterchuk",
  // Эти переменные берутся из локального .env при деплое
  // и передаются в функцию при каждой новой версии.
  runtimeEnv: ["TELEGRAM_BOT_TOKEN", "TELEGRAM_CHAT_ID", "TELEGRAM_API_BASE"],
});
