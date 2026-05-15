import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error(
        "❌ Переменные окружения TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не найдены!",
      );
      return NextResponse.json(
        {
          error:
            "Ошибка настройки бота. Пожалуйста, свяжитесь с администратором.",
        },
        { status: 500 },
      );
    }

    const textMessage = `
📢 *Новая заявка с сайта!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}

🕐 ${new Date().toLocaleString("ru-RU")}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: textMessage,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("❌ Ошибка Telegram API:", data.description);
      throw new Error(data.description || "Ошибка отправки в Telegram");
    }

    console.log("✅ Заявка успешно отправлена в Telegram");

    return NextResponse.json({
      success: true,
      message: "Заявка успешно отправлена",
    });
  } catch (error) {
    console.error("❌ Ошибка при отправке в Telegram:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Внутренняя ошибка сервера",
      },
      { status: 500 },
    );
  }
}
