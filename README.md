
# Personal Website

Website ini dibangun dengan React + Vite dan sudah disiapkan untuk deploy otomatis ke GitHub Pages.

## Jalankan Lokal

1. Install dependency:
   - `npm install`
2. Jalankan development server:
   - `npm run dev`
3. Build production:
   - `npm run build`
4. Preview hasil build:
   - `npm run preview`

## Deploy ke GitHub Pages

Workflow deploy sudah tersedia di `.github/workflows/deploy.yml` dan akan otomatis jalan saat push ke branch `main`.

### 1) Pastikan pengaturan repository

1. Buka repository di GitHub.
2. Masuk ke **Settings** > **Pages**.
3. Pada **Source**, pilih **GitHub Actions**.

### 2) Push ke branch main

Setiap push ke `main` akan:

1. Install dependency.
2. Build project Vite.
3. Upload artifact `dist`.
4. Deploy ke GitHub Pages.

### 3) Cek hasil deploy

1. Buka tab **Actions** dan tunggu workflow `Deploy to GitHub Pages` sukses.
2. URL website akan muncul di environment `github-pages` pada job deploy.

## Catatan Base URL

Konfigurasi Vite sudah otomatis menangani base path GitHub Pages:

1. Repo user/org site (contoh: `username.github.io`) akan memakai `/`.
2. Repo project site (contoh: `my-portfolio`) akan memakai `/my-portfolio/` saat build di GitHub Actions.
3. Kamu juga bisa override manual pakai env `VITE_BASE_PATH` bila diperlukan.
  