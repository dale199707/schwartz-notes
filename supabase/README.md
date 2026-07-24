# 帳號同步後端

網站維持公開閱讀；只有登入後才會將「自己的筆記」、★重要標記及螢光標記同步至 Supabase。

## 目前環境

- Project：`medical-notes`
- Region：Southeast Asia (Singapore)
- 正式 Site URL／Redirect URL：`https://dale199707.github.io/schwartz-notes/`
- `medical_note_state` migration 與 RLS：已套用
- 前端 `sync-config.js`：已填入 project URL 與 browser publishable key

Secret／service role key 未寫入 repository；publishable key 的資料存取仍受 Postgres RLS 限制。

## 啟用方式

1. 建立獨立的 Supabase project。
2. 在 SQL Editor 執行 `migrations/202607240001_medical_note_state.sql`。
3. 在 Authentication → URL Configuration 設定正式網站的 Site URL，並把本機測試網址加入 Redirect URLs。
4. 保留 Email Magic Link；若之後需要 Google login，再另行啟用 Google provider。
5. 將 project URL 與 publishable key 填入根目錄 `sync-config.js`。

`supabasePublishableKey` 是供瀏覽器使用的 public key；真正的 secret／service role key 不得放入 Git、前端或文件。

## 資料隔離

`medical_note_state` 的 primary key 為：

`user_id + book_id + chapter_id + kind`

Row Level Security 只允許 authenticated user 讀寫自己的資料。前端不使用 service role key。

資料庫另限制：

- `book_id + chapter_id` 只能對應目前三本正式書籍及其有效章數。
- `personal-notes`、`important`、`highlights` 的 payload 必須分別為 JSON string、array、object。
- 每筆 payload 最多 100,000 bytes，避免公開註冊帳號以任意大型資料耗盡 project 空間。

## 同步策略

- 未登入：沿用既有 localStorage，本機功能完全不受影響。
- 第一次登入且雲端沒有資料：上傳目前裝置的既有資料。
- 新裝置沒有本機資料：下載雲端資料。
- 兩端均有不同資料：先讀取 remote 並比較共同 fingerprint；★取聯集、螢光標記合併、同章筆記衝突時保留兩個版本，再寫回 remote。
- 斷線時：先保留本機與 outbox，重新連線或視窗重新取得焦點後重試。
- 登出／切換帳號：封存前一帳號的本機 snapshot，切回未登入空間或載入下一帳號 snapshot，避免共享裝置顯示前一帳號筆記。
