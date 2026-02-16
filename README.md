# BARADE STUDIO - Website Portfolio

Website portfolio profesional untuk jasa desain grafis dan web development menggunakan Next.js 14.

## 🎨 Brand Colors
- Lime: `#DCF900`
- Dark: `#3f3f3f`
- Gray: `#d9d9d9`
- Cream: `#f9f9ed`

## 📋 Fitur Website

### Halaman
1. **Home** - Hero section dengan intro & stats
2. **About** - Tentang studio, nilai-nilai, dan tim
3. **Services** - Layanan yang ditawarkan (Graphic Design, Web Dev, Branding)
4. **Portfolio** - Galeri project dengan filter
5. **Contact** - Form kontak dan informasi bisnis

### Teknologi
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Responsive Design
- Modern Font: Syne + Space Mono

## 🚀 Cara Install & Jalankan (Untuk Pemula)

### 1. Install Node.js
Download dan install Node.js dari https://nodejs.org/
- Pilih versi LTS (Long Term Support)
- Ikuti proses instalasi sampai selesai
- Verify instalasi dengan buka terminal/cmd dan ketik:
  ```bash
  node --version
  npm --version
  ```

### 2. Download Project
- Download folder `barade-studio` ini ke komputer kamu
- Simpan di lokasi yang mudah diakses (misalnya Desktop atau Documents)

### 3. Install Dependencies
Buka terminal/command prompt di folder project, lalu jalankan:

```bash
npm install
```

Ini akan download semua package yang dibutuhkan. Tunggu sampai selesai.

### 4. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di: http://localhost:3000

Buka browser dan akses URL tersebut. Website sudah bisa dilihat!

### 5. Edit & Customize
- Edit konten di file `.tsx` di folder `app/`
- Edit styling di `app/globals.css`
- Edit warna di `tailwind.config.ts`
- Setiap perubahan akan otomatis ter-update di browser

## 📦 Build untuk Production

Kalau sudah siap untuk deploy:

```bash
npm run build
```

Ini akan membuat versi optimized dari website kamu.

Test production build:
```bash
npm start
```

## 🌐 Deploy ke Internet

### Option 1: Vercel (Recommended - Gratis!)

1. Daftar di https://vercel.com (bisa pakai GitHub)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Di folder project, jalankan:
   ```bash
   vercel
   ```
4. Ikuti instruksi di terminal
5. Website kamu akan live dengan URL dari Vercel!

**Deploy Update:**
Setiap kali ada perubahan, cukup jalankan:
```bash
vercel --prod
```

### Option 2: Netlify (Gratis!)

1. Daftar di https://netlify.com
2. Build project dulu:
   ```bash
   npm run build
   ```
3. Drag & drop folder `.next` ke Netlify dashboard
4. Done! Website live

### Option 3: GitHub + Vercel (Otomatis)

1. Push project ke GitHub repository
2. Connect repository ke Vercel
3. Setiap push ke GitHub = otomatis deploy!

## 📝 Struktur Folder

```
barade-studio/
├── app/                  # Halaman-halaman website
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── portfolio/       # Portfolio page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # Komponen reusable
│   ├── Navbar.tsx       # Navigation bar
│   └── Footer.tsx       # Footer
├── public/              # File static (images, etc)
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🎯 Customization Tips

### Ganti Logo
Edit di `components/Navbar.tsx` bagian:
```tsx
<span className="font-display text-3xl font-bold text-brand-dark tracking-tight">
  BARADE
</span>
```

### Ganti Warna
Edit di `tailwind.config.ts`:
```typescript
colors: {
  'brand-lime': '#DCF900',
  'brand-dark': '#3f3f3f',
  // dst...
}
```

### Tambah Halaman Baru
1. Buat folder baru di `app/`, misalnya `app/blog/`
2. Buat file `page.tsx` di dalamnya
3. Copy struktur dari halaman lain
4. Tambahkan link di Navbar

### Ganti Font
Edit di `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=NamaFont:wght@400;700&display=swap');
```

## 🐛 Troubleshooting

**Error: "Command not found"**
- Pastikan Node.js sudah terinstall
- Restart terminal/cmd

**Error: "Port 3000 already in use"**
- Ada aplikasi lain yang pakai port 3000
- Gunakan port lain: `npm run dev -- -p 3001`

**Website tidak update**
- Hard refresh browser (Ctrl+Shift+R atau Cmd+Shift+R)
- Stop server (Ctrl+C) lalu run lagi

**Error saat build**
- Delete folder `node_modules` dan `.next`
- Run `npm install` lagi
- Try build lagi

## 📞 Support

Butuh bantuan? Dokumentasi lengkap Next.js:
- https://nextjs.org/docs
- https://tailwindcss.com/docs

## 📄 License

Free to use untuk project pribadi atau komersial!

---

Made with ❤️ for BARADE STUDIO
