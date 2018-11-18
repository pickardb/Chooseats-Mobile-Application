import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 360000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/debug/app-debug.apk', // relative to root of project
 // clearSystemFiles: true
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(15000); // wait for app to load
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('checkAuthentication-background')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  await driver.elementByAccessibilityId('checkAuthentication-button-go').click();
  await driver.sleep(1000);
  expect(await driver.hasElementByAccessibilityId('index-button-logIn')).toBe(true);
  await driver.elementByAccessibilityId('index-button-logIn').click();
  await driver.sleep(3000);
  expect(await driver.hasElementByAccessibilityId('logIn-button')).toBe(true);
  await driver.quit();
});