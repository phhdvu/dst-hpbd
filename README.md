# Happy Birthday 🎉

Trang chúc mừng sinh nhật xây bằng Next.js 16 + Tailwind CSS v4 + shadcn/ui, có animation bóng bay, bánh kem, pháo hoa và confetti. Tối ưu để deploy lên GitHub Pages dạng static.

## Chạy local

```bash
pnpm install
pnpm dev
```

Mở http://localhost:3000.

## Build static

```bash
pnpm build
```

Output nằm trong thư mục `out/`.

## Deploy lên GitHub Pages

1. Đẩy code lên nhánh `main`.
2. Vào **Settings → Pages**, chọn **Source: GitHub Actions**.
3. Push lên `main` là workflow `.github/workflows/deploy.yml` tự build và deploy.

> Nếu repo nằm dưới đường dẫn con (ví dụ `username.github.io/repo-name`), đặt biến môi trường `NEXT_PUBLIC_BASE_PATH=/repo-name` trong workflow trước bước build để asset nạp đúng đường dẫn.
