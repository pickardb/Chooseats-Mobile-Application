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
  //Wait for the app to load, then navigate to the signup page
  expect(await driver.hasElementByAccessibilityId('checkAuthentication-background')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
  await driver.elementByAccessibilityId('checkAuthentication-button-go').click();
  await driver.sleep(1000);
  expect(await driver.hasElementByAccessibilityId('index-button-signUp')).toBe(true);
  await driver.elementByAccessibilityId('index-button-signUp').click();
  //Manually Enter credentials to create a new account
  await driver.sleep(20000);
  //Ensure app logged in, navigate to the roomJoin page
  expect(await driver.hasElementByAccessibilityId('lobby-background'));
  expect(await driver.hasElementByAccessibilityId('lobby-button-roomList'));
  await driver.elementByAccessibilityId('lobby-button-roomList').click();
  await driver.sleep(3000);
  expect(await driver.hasElementByAccessibilityId('roomList-button-joinRoom'));
  await driver.elementByAccessibilityId('roomList-button-joinRoom').click();
  //Manually enter code '4GOW08' and press room join button
  await driver.sleep(15000);
  //Check to see that the room has been joined
  expect(await driver.hasElementByAccessibilityId('4GOW08'));

  await driver.quit();
});