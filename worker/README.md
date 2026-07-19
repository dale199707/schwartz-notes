# Schwartz Medical AI Worker

這個 Cloudflare Worker 是 GitHub Pages 與 OpenAI Responses API 之間的安全 proxy。`OPENAI_API_KEY` 與 `AI_ACCESS_PASSWORD` 只存為 Cloudflare secret，不得放入網站 JavaScript、`wrangler.toml` 或 Git。

## 功能

- 使用 `gpt-5.6-sol` 與 Responses API `web_search`
- 回傳可點擊的網路引用資料
- 僅允許正式網站 origin
- 以 `X-AI-Access-Password` request header 驗證 AI 使用密碼
- 限制每個來源每分鐘最多 6 次查詢
- 限制問題長度，且不回傳 OpenAI 的內部錯誤內容

## 部署摘要

1. 安裝 Wrangler 4.36.0 以上並登入 Cloudflare。
2. 在本資料夾分別執行 `wrangler secret put OPENAI_API_KEY` 與 `wrangler secret put AI_ACCESS_PASSWORD`，安全存成 Worker secrets。
3. 執行 `wrangler deploy`。
4. 將部署後的 `https://...workers.dev/ask` 寫入根目錄 `ai-config.js` 的 `window.SCHWARTZ_AI_ENDPOINT`。

若網站網址改變，需同步調整 `wrangler.toml` 的 `ALLOWED_ORIGIN`。
