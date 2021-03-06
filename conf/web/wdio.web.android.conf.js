const { config } = require('./wdio.web.visual.conf');

config.port = 4723;
config.services.shift();  // Remove chromedriver
config.services.shift();  // Remove Selenium Standalone
config.services.push('appium');
config.appium = {
  // For options see
  // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
  logPath: './logs/appium',
  args: {
    // For arguments see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    chromedriverExecutable: './libs/chromedriver',
  },
  command : 'appium'
};
config.capabilities = [
  {
    appiumVersion: '1.16.0',
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '8.1',
    deviceName: 'emulator-5554',
    waitforTimeout: 30000,
    commandTimeout: 30000,
    newCommandTimeout: 30000,
    nativeWebScreenshot: true,
  },
];

exports.config = config;
