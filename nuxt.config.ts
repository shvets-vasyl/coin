export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  css: ["@/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_utils.scss" as *;',
          api: "modern-compiler",
        },
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      title: "CoinCast",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Обмін криптовалют та швидкі міжнародні перекази USDT / BTC / ETH / LTC | Швидко, вигідно, надійно",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "og:image:width",
          content: "600",
        },
        {
          property: "og:image:height",
          content: "314",
        },
        {
          property: "og:image:type",
          content: "image/jpeg",
        },
				{
          property: "og:image",
          content: "/images/og.png",
        },
        {
          property: "og:description",
          content:
            "Обмін криптовалют та швидкі міжнародні перекази USDT / BTC / ETH / LTC | Швидко, вигідно, надійно",
        },
        {
          property: "og:title",
          content: "CoinCast",
        },
        {
          property: "og:site_name",
          content: "CoinCast",
        },
        {
          name: "color-scheme",
          content: "light dark",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/fav.png" }],
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: { port: 6969 },
});
