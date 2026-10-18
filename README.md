# Сайт логопеда-афазиолога

Next.js (App Router) + Tailwind CSS 4 + Swiper.

## Запуск

```bash
npm install
cp .env.example .env   # заполните значения
npm run dev
```

## Переменные окружения

| Переменная             | Назначение                                                          |
| ---------------------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Адрес сайта без слэша на конце. Нужен для SEO (canonical, sitemap). |
| `TELEGRAM_BOT_TOKEN`   | Токен бота, в который приходят заявки.                              |
| `TELEGRAM_CHAT_ID`     | Чат, куда бот отправляет заявки.                                    |

`.env` не коммитьте: он уже в `.gitignore`.

## SEO

- `src/app/layout.tsx` — title, description, Open Graph, canonical, robots.
- `src/common/seo.ts` — тексты для мета-тегов и микроразметка JSON-LD
  (человек, услуги, частые вопросы), строится из `src/common/mock.ts`.
- `src/app/sitemap.ts`, `src/app/robots.ts` — sitemap.xml и robots.txt.
- `src/app/opengraph-image.png` — картинка для превью в соцсетях (1200×630).
