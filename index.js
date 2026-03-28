const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const config = {
  video_url: "https://youtube.com/shorts/GGF617c-N0A",
  views: 5,
  delay: 10000
};

async function viewVideo() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.goto(config.video_url);
  await page.waitForTimeout(15000); // Watch 15s
  await browser.close();
  console.log('✅ View completed');
}

module.exports = async (req, res) => {
  console.log('🤖 Bot triggered');
  
  for(let i = 0; i < config.views; i++) {
    await viewVideo();
    await new Promise(r => setTimeout(r, config.delay));
  }
  
  res.json({ 
    status: 'success', 
    views: config.views,
    video: config.video_url 
  });
};
