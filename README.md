# لیست قیمت - Arena Landing Page

صفحه لندینگ Arena که با Puppeteer دانلود و تبدیل به HTML شده است.

## 🚀 شروع سریع

### 1️⃣ نصب وابستگی‌ها:
```bash
npm install
```

### 2️⃣ دانلود صفحه Arena:
```bash
npm run download
```
یا
```bash
node download-arena.js
```

### 3️⃣ اجرا محلی:
```bash
npm run dev
```
سپس به `http://localhost:8000` بروید.

---

## 📦 Vercel Deployment

### گام 1: Push به GitHub
```bash
git add .
git commit -m "Add Arena landing page"
git push origin main
```

### گام 2: Import به Vercel
1. به [Vercel](https://vercel.com) بروید
2. "New Project" کلیک کنید
3. `listtasvireto` را select کنید
4. "Deploy" کلیک کنید

### گام 3: URL نهایی
```
https://listtasvireto.vercel.app
```

---

## 📝 فایل‌ها

- `index.html` - صفحه Arena دانلود شده
- `download-arena.js` - اسکریپت Puppeteer برای دانلود
- `package.json` - وابستگی‌ها و اسکریپت‌ها
- `styles.css` - استایل‌های اضافی (اختیاری)
- `script.js` - JavaScript اضافی (اختیاری)
- `vercel.json` - تنظیمات Vercel

---

## ⚙️ نحوه کار

اسکریپت `download-arena.js`:
1. صفحه Arena را در Puppeteer باز می‌کند
2. تمام محتوا و جاوااسکریپت را render می‌کند
3. HTML نهایی را در `index.html` ذخیره می‌کند

---

## 📄 لایسنس

MIT