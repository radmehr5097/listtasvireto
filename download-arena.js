const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function downloadArena() {
  const url = 'https://019b8914-6380-7ca8-bb29-57208cf4ab81.arena.site/';
  
  console.log('🚀 شروع دانلود صفحه Arena...');
  console.log(`📍 URL: ${url}`);
  
  let browser;
  try {
    // راه اندازی Puppeteer
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // تنظیمات صفحه
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('⏳ درحال بارگیری صفحه...');
    
    // باز کردن صفحه با صبر برای بارگیری کامل
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });
    
    console.log('✅ صفحه بارگیری شد');
    
    // دریافت HTML کامل
    const html = await page.content();
    
    // ذخیره HTML
    const outputPath = path.join(__dirname, 'index.html');
    fs.writeFileSync(outputPath, html, 'utf-8');
    
    console.log(`💾 فایل HTML ذخیره شد: ${outputPath}`);
    console.log(`📊 حجم فایل: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
    console.log('\n✨ دانلود موفق!');
    console.log('🚀 حالا می‌توانید این فایل را به Vercel deploy کنید');
    
  } catch (error) {
    console.error('❌ خطا:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// اجرا
downloadArena();