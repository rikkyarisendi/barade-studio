# 🚀 Panduan Deploy BARADE STUDIO - Step by Step

## Persiapan Awal

### 1. Pastikan Website Berjalan dengan Baik
```bash
npm run dev
```
- Cek semua halaman
- Pastikan tidak ada error
- Test di berbagai ukuran layar

### 2. Build Test
```bash
npm run build
```
Jika ada error, perbaiki dulu sebelum deploy.

---

## 🎯 CARA 1: Deploy ke Vercel (RECOMMENDED - TERMUDAH)

### Mengapa Vercel?
- ✅ Gratis untuk hobby projects
- ✅ Otomatis optimized untuk Next.js
- ✅ SSL certificate gratis
- ✅ Deploy dalam hitungan detik
- ✅ Custom domain support

### Step-by-Step Deploy dengan Vercel (Via Website - TERMUDAH)

#### 1. Daftar Vercel
- Buka https://vercel.com
- Klik "Sign Up"
- Pilih "Continue with GitHub" (atau email)
- Selesaikan proses pendaftaran

#### 2. Siapkan Project di GitHub (Jika belum)
```bash
# Di folder barade-studio
git init
git add .
git commit -m "Initial commit"
```

- Buat repository baru di GitHub
- Push code:
```bash
git remote add origin https://github.com/username/barade-studio.git
git push -u origin main
```

#### 3. Deploy dari Vercel Dashboard
1. Login ke Vercel dashboard
2. Klik "Add New Project"
3. Import repository GitHub kamu
4. Vercel akan auto-detect Next.js
5. Klik "Deploy"
6. Tunggu 1-2 menit
7. ✅ DONE! Website live di `https://barade-studio.vercel.app`

#### 4. Deploy Update Selanjutnya
Setiap kali push ke GitHub:
```bash
git add .
git commit -m "Update website"
git push
```
Vercel otomatis deploy update!

### Deploy dengan Vercel CLI (Alternative)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login
```bash
vercel login
```
Ikuti instruksi di browser.

#### 3. Deploy
```bash
vercel
```
Jawab pertanyaan:
- Set up and deploy? → Yes
- Which scope? → Pilih account kamu
- Link to existing project? → No
- Project name? → barade-studio (enter)
- Directory? → ./ (enter)
- Override settings? → No (enter)

#### 4. Deploy ke Production
```bash
vercel --prod
```

Website live! Kamu dapat URL seperti: `https://barade-studio-xxx.vercel.app`

---

## 🌟 CARA 2: Deploy ke Netlify (Gratis)

### Step-by-Step

#### 1. Build Project
```bash
npm run build
```

#### 2. Daftar Netlify
- Buka https://netlify.com
- Sign up dengan GitHub atau email

#### 3. Deploy via Drag & Drop
1. Login ke Netlify dashboard
2. Klik "Add new site" → "Deploy manually"
3. Drag folder `barade-studio` ke area drop
4. Tunggu proses upload & deploy
5. ✅ Website live!

#### Atau Deploy via GitHub (Auto-deploy)
1. Push project ke GitHub (lihat cara di atas)
2. Di Netlify: "Import from Git"
3. Connect ke GitHub repository
4. Build settings (auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy site
6. Setiap push ke GitHub = auto deploy!

---

## 💻 CARA 3: Deploy ke Hosting Sendiri (VPS/Shared Hosting)

### Requirements:
- Node.js terinstall di server
- SSH access ke server

### Step-by-Step

#### 1. Build Production
```bash
npm run build
```

#### 2. Upload ke Server
Upload semua file project via FTP atau:
```bash
scp -r barade-studio/* user@your-server.com:/path/to/website/
```

#### 3. Di Server, Install Dependencies
```bash
cd /path/to/website
npm install --production
```

#### 4. Jalankan dengan PM2 (Process Manager)
```bash
npm install -g pm2
pm2 start npm --name "barade-studio" -- start
pm2 save
pm2 startup
```

#### 5. Setup Nginx (Reverse Proxy)
Edit `/etc/nginx/sites-available/barade-studio`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/barade-studio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 6. Setup SSL (HTTPS) dengan Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 🌐 Setup Custom Domain

### Untuk Vercel:

#### 1. Di Vercel Dashboard
- Buka project settings
- Klik "Domains"
- Add custom domain: `www.baradestudio.com`

#### 2. Di Domain Provider (Namecheap, GoDaddy, dll)
Add DNS records:

**Type A Record:**
- Host: `@`
- Value: `76.76.21.21`

**Type CNAME:**
- Host: `www`
- Value: `cname.vercel-dns.com`

#### 3. Tunggu DNS Propagation (5-48 jam)

### Untuk Netlify:

#### 1. Di Netlify Dashboard
- Klik "Domain settings"
- "Add custom domain"
- Enter domain kamu

#### 2. Update DNS di domain provider
- Type A Record: Point ke Netlify IP
- Atau Type CNAME: Point ke `yoursite.netlify.app`

---

## 📊 Monitoring & Analytics

### Google Analytics
1. Buat property di https://analytics.google.com
2. Dapat Measurement ID (G-XXXXXXXXXX)
3. Tambahkan script di `app/layout.tsx`

### Vercel Analytics (Built-in)
```bash
npm install @vercel/analytics
```

Di `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🔧 Environment Variables (Jika Diperlukan)

### Local Development
Buat file `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
CONTACT_EMAIL=hello@baradestudio.com
```

### Production (Vercel/Netlify)
Tambahkan env variables di dashboard:
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment

---

## ✅ Checklist Pre-Deploy

- [ ] Website berjalan tanpa error di local
- [ ] Build test berhasil (`npm run build`)
- [ ] Semua link berfungsi
- [ ] Responsive di mobile & desktop
- [ ] Form contact berfungsi
- [ ] Meta tags & SEO sudah diset
- [ ] Favicon sudah ditambahkan
- [ ] Google Analytics (optional) sudah disetup

---

## 🆘 Troubleshooting

### Deploy Gagal di Vercel
- Check build logs
- Pastikan `package.json` sudah benar
- Coba build local dulu

### Website Lambat
- Optimize images
- Enable caching
- Use Vercel Edge Network

### Custom Domain Tidak Jalan
- Wait for DNS propagation (24-48 hours)
- Clear DNS cache
- Check DNS records sudah benar

---

## 📞 Butuh Bantuan?

### Resources:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Netlify Docs: https://docs.netlify.com

### Community:
- Next.js Discord
- Stack Overflow
- GitHub Issues

---

**Selamat! Website BARADE STUDIO kamu siap di internet! 🎉**
