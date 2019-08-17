const puppeteer = require("puppeteer");
const proxyUrl = require("./proxyUrl");
const userAgent = require("./userAgent");

async function main() {

    console.log('Started Spider Sucessfully!');
  
    for (let i = 0; i < proxyUrl.proxies.length; i++) {

    try{

      let serverUrl = proxyUrl.proxies[i];

      let browser = await puppeteer.launch({args: [
        `--proxy-server=${serverUrl}`,
        '--disable-background-timer-throttling',
        '--disable-breakpad',
        '--disable-client-side-phishing-detection',
        '--disable-cloud-import',
        '--disable-default-apps',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-gesture-typing',
        '--disable-hang-monitor',
        '--disable-infobars',
        '--disable-notifications',
        '--disable-offer-store-unmasked-wallet-cards',
        '--disable-offer-upload-credit-cards',
        '--disable-popup-blocking',
        '--disable-print-preview',
        '--disable-prompt-on-repost',
        '--disable-setuid-sandbox',
        '--disable-speech-api',
        '--disable-sync',
        '--disable-tab-for-desktop-share',
        '--disable-translate',
        '--disable-voice-input',
        '--disable-wake-on-wifi',
        '--enable-async-dns',
        '--enable-simple-cache-backend',
        '--enable-tcp-fast-open',
        '--enable-webgl',
        '--hide-scrollbars',
        '--ignore-gpu-blacklist',
        '--media-cache-size=33554432',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-first-run',
        '--no-pings',
        '--no-sandbox',
        '--no-zygote',
        '--password-store=basic',
        '--prerender-from-omnibox=disabled',
        '--use-gl=swiftshader',
        '--use-mock-keychain',
      ],});

    await console.log(`Launching Browser with Proxy: ${serverUrl}`);
    try {
    let page = await browser.newPage();

        await page.setUserAgent(userAgent.user[Math.floor(Math.random() * 1000)]); 

        await page.setViewport({
        width: 1280,
        height: 720,
        deviceScaleFactor: 1,
        });

        await console.log('Opening Page...');
    
        await page.goto('http://stfly.io/YoutubeStream');

        await console.log('Page Opened Waiting for 18 Seconds...');

        await page.waitFor(18000);

        await console.log('Browser Closed! Relaunching...');
    
    } catch(e) {
            //console.log(e)
            await console.log('Some Error in Proxy Connection! Continuing...')            
            continue;
        }
     finally {

        await browser.close();
  
      }
  } catch(e) {
          //console.log(e)
          await console.log('Some Error in Browser! Continuing...')            
          continue;
      }
    }
  
    await console.log('End of Proxy Urls');
  }

main();  