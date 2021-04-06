import 'colors'
import wd from 'wd'
import BPromise from 'bluebird'

var webdriverKobitonServerConfig = {
  protocol: 'https',
  host: 'api-test.kobiton.com',
  auth: 'nghiatrongnguyen+test12:db1d26e9-e250-4b41-9a7b-74cf3132a14e'
}

var desiredCapsMain = {
  sessionName:        'Automation test session on parent device',
  sessionDescription: 'This is an example for iOS web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,

  deviceGroup:        'ORGANIZATION',
  noReset:            true,
  fullReset:          false,
  deviceName:         'iPad*',
  platformVersion:    '13.4.1',
  platformName:       'iOS',
  udid:               '234983a3360b1db98ce97102f2391c38c340f08b',
  newCommandTimeout: 18000,
  app: 'kobiton-store:64550',
  autoLaunch:false,
  autoGrantPermissions:true
}

var desiredCapsChild = {
  sessionName:        'Automation test session on parent device',
  sessionDescription: 'This is an example for iOS web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,

  deviceGroup:        'ORGANIZATION',
  noReset:            true,
  fullReset:          false,
  deviceName:         'iPad*',
  platformVersion:    '14.4.2',
  platformName:       'iOS',
  udid:               '6cdf1d3787d5a01e4370ddcd6c1cc38d09f7db9b',
  newCommandTimeout: 18000,
  app: 'kobiton-store:64550',
  autoLaunch:false,
  autoGrantPermissions:true
}

async function createSession(desiredCap) {
  const driver = wd.promiseChainRemote(webdriverKobitonServerConfig)
  driver
    .on('status', (info) => console.log(info.cyan))
    .on('command', (meth, path, data) => console.log(' > ' + meth.yellow, path.grey, data || ''))
    .on('http', (meth, path, data) => console.log(' > ' + meth.magenta, path, (data || '').grey))
  await driver.init(desiredCap)
  return driver
}

async function trustApp(driver) {
  await driver.execute('mobile: activateApp', {'bundleId': 'com.apple.Preferences'})

  const generalCell = await driver.waitForElementByXPath('//XCUIElementTypeCell[@name="General"]', 10000)
  if (generalCell) {
    await generalCell.click()
  }

  const deviceManagerElement = await driver.waitForElementByXPath('//XCUIElementTypeCell[contains(@name, "Device Management")]', 10000)
  if (deviceManagerElement) {
    await deviceManagerElement.click()
  }

  const revelSystemsIncElement = await driver.waitForElementByXPath('//XCUIElementTypeCell[@name="Revel Systems Inc"]', 10000)
  if (revelSystemsIncElement) {
    await revelSystemsIncElement.click()
    await driver.sleep(3000)
  }

  const trustElement = await driver.hasElementByXPath('//XCUIElementTypeStaticText[@name="Trust “Revel Systems Inc”"]')
  if (trustElement) {
    const btntrustElement = await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="Trust “Revel Systems Inc”"]')
    await btntrustElement.click()

    const trustButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="Trust"]', 10000)
    if (trustButton) {
      await trustButton.click()
    }
  }
}

async function launchPOSApp(driver) {
  await driver.execute('mobile: activateApp', {'bundleId': 'com.re.pos'})

  let retry = 0
  while (retry < 2) {

    const hasAlertWarning = await driver.hasElementByXPath('//XCUIElementTypeStaticText[@name="WARNING!"]')
    if (hasAlertWarning) {
      console.log('get alert location')
      const continueButton = await driver.elementByXPath('//XCUIElementTypeStaticText[@name="Continue"]', 10000)
      if (continueButton) {
        await continueButton.click()
        await driver.sleep(2000)
      }
    }
    const hasAlertNotification = await driver.hasElementByXPath('//XCUIElementTypeAlert[contains(@name, "Send You Notifications")]')
    if (hasAlertNotification) {
      console.log('get alert notification')
      const allowButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="Allow"]', 10000)
      if (allowButton) {
        await allowButton.click()
        await driver.sleep(12000)
      }
    }

    const hasAlertLocation = await driver.hasElementByXPath('//XCUIElementTypeAlert[contains(@name, "use your location")]')
    if (hasAlertLocation) {
      console.log('get alert location')
      const allowOnceButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[contains(@name,"Allow While")]')
      if (allowOnceButton) {
        await allowOnceButton.click()
        await driver.sleep(2000)
      }
    }

    const hasAlertLocalNetwork = await driver.hasElementByXPath('//XCUIElementTypeAlert[contains(@name, "connect to devices on your local network")]')
    if (hasAlertLocalNetwork) {
      console.log('get alert local network')
      const okButton = await driver.elementByXPath('//XCUIElementTypeButton[@name="OK"]', 10000)
      if (okButton) {
        await okButton.click()
        await driver.sleep(2000)
      }
    }
    console.log("Number of retry: "+retry)
   
    retry ++
  }
}

async function login(driver, parent) {
  const welcomeLabel = await driver.hasElementByXPath('//XCUIElementTypeStaticText[@name="Welcome to Revel Systems iPad Point of Sale"]')
  if (welcomeLabel) {
    const skipButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="SkipButton"]', 10000)
    if (skipButton) {
      await skipButton.click()
    }

    const signInButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="Sign In"]', 10000)
    if (signInButton) {
      await signInButton.click()
    }

    const urlField = await driver.waitForElementByXPath('//XCUIElementTypeTextField[@name="URLTextField"]', 10000)
    if (urlField) {
      await urlField.sendKeys('https://1-21-demo-kobiton.revelup.com')
    }

    const estIdField = await driver.waitForElementByXPath('//XCUIElementTypeTextField[@name="EstIDTextField"]', 10000)
    if (estIdField) {
      await estIdField.sendKeys('kobiton_91620')
    }

    const pasField = await driver.waitForElementByXPath('//XCUIElementTypeSecureTextField[@name="PasTextField"]', 10000)
    if (pasField) {
      await pasField.sendKeys('K0b1t0n!12')
    }

    const enterButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="Enter"]', 10000)
    if (enterButton) {
      await enterButton.click()
      await driver.sleep(2000)
    }

    const info = await driver.hasElementByXPath('//XCUIElementTypeStaticText[@name="Info"]')
    if (info) {
      const yesButton = await driver.elementByXPath('//XCUIElementTypeStaticText[@name="Yes"]')
      if (yesButton) {
        await yesButton.click()
        await driver.sleep(60000)
      }
    }

    const allowOnceButton = await driver.hasElementByXPath('//XCUIElementTypeButton[@name="Allow Once"]')
    if (allowOnceButton) {
      await allowOnceButton.click()
      await driver.sleep(2000)
    }

    if (parent) {
      const mainText = await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="Main"]', 10000)
      if (mainText) {
        await mainText.click()
      }
    }
    else {
      const childText = await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="CHILD"]', 10000)
      if (childText) {
        await childText.click()
      }
    }

    const nextButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="BtnNext"]', 10000)
    if (nextButton) {
      await nextButton.click()
    }
  }

  const refreshButton = await driver.hasElementByXPath('//XCUIElementTypeButton[@name="RefreshBtn"]')
  if (refreshButton) {
    const number3Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="3"]', 2000)
    if (number3Button) {
      await number3Button.click()
    }

    const number4Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="4"]', 2000)
    if (number4Button) {
      await number4Button.click()
    }

    const number6Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="6"]', 2000)
    if (number6Button) {
      await number6Button.click()
    }

    const number1Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="1"]', 2000)
    if (number1Button) {
      await number1Button.click()
    }

    const pinLogin = await driver.elementByXPath('//XCUIElementTypeButton[@name="BtnPinLogin"]', 2000)
    if (pinLogin) {
      await pinLogin.click()
    }
  }
}
async function enterPasscode(driver) {
  const number3Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="3"]')
  if (number3Button) {
    await number3Button.click()
  }

  const number4Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="4"]')
  if (number4Button) {
    await number4Button.click()
  }

  const number6Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="6"]')
  if (number6Button) {
    await number6Button.click()
  }

  const number1Button = await driver.elementByXPath('//XCUIElementTypeButton[@name="1"]')
  if (number1Button) {
    await number1Button.click()
  }

  const okButton = await driver.elementByXPath('//XCUIElementTypeButton[@name="OK"]')
  if (okButton) {
    await okButton.click()
  }

  }
async function order(driver) {
  // Loop order action per 3-5 minutes
  while (true) {
    const dashboardButton = await driver.waitForElementByXPath('//XCUIElementTypeCollectionView[@name="Dashboard Actions Collection View"]/XCUIElementTypeCell[2]/XCUIElementTypeOther/XCUIElementTypeButton', 10000)
  if (dashboardButton) {
    await dashboardButton.click()
  }

  const prevailingText = await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="Prevailing Tax Group"]', 10000)
  if (prevailingText) {
    await prevailingText.click()
  }

  const payButton = await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="PayButtonLabel"]')
  if (payButton) {
    await payButton.click()
  }

  const cashButton =await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="Cash"]')
  if (cashButton) {
    await cashButton.click()
    await driver.sleep(6000)
  }

  // TODO
  
  const edtEnterCard =await driver.waitForElementByXPath('//XCUIElementTypeApplication[@name="POS"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage/XCUIElementTypeOther[4]/XCUIElementTypeTextField',10000)
  if (edtEnterCard) {
    await edtEnterCard.sendKeys(4)
  }

  const buttonNext =await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="Next"]')
  if (buttonNext) {
    await buttonNext.click()
  }

  const buttonClose =await driver.waitForElementByXPath('(//XCUIElementTypeStaticText[@name="Close"])[2]')
  if (buttonClose) {
    await buttonClose.click()
  }

  const buttonDone =await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="Done"]')
  if (buttonDone) {
    await buttonDone.click()
  }

  const buttonCloseOrder =await driver.waitForElementByXPath('//XCUIElementTypeStaticText[@name="Close Order"]')
  if (buttonCloseOrder) {
    await buttonCloseOrder.click()
  }

}
}

async function waitForOrder(driver) {
  // Loop to check the order forever per 1 minute
  while (true) {
    const dotButton = await driver.waitForElementByXPath('//XCUIElementTypeButton[@name="∙∙∙"]', 10000)
    if (dotButton) {
      await dotButton.click();
    }

    const securityPin = await driver.hasElementByXPath('//XCUIElementTypeStaticText[@name="Security PIN"]')
    if (securityPin) {
      await enterPasscode(driver)
    }

    const dismissButton = await driver.waitForElementByXPath('//XCUIElementTypeOther[@name="PopoverDismissRegion"]', 10000)
    if (dismissButton) {
      await dismissButton.click();
    }

    // Wait for 1 minute and repeat
    await driver.sleep(30000);
  }
}

async function run() {
  let [driverParent, driverChild] = await BPromise.all([createSession(desiredCapsMain), createSession(desiredCapsChild)])

  try {
    // Trust enterprise
    await BPromise.all([trustApp(driverParent), trustApp(driverChild)])

    await BPromise.all([launchPOSApp(driverParent), launchPOSApp(driverChild)])

    await BPromise.all([login(driverParent), login(driverChild)])

    await BPromise.all([waitForOrder(driverParent), order(driverChild)])

    // Order
    // await BPromise.all([waitForOrder(driverParent)])
  }
  catch (err) {
    console.log(err)
  }
  finally {
    driverParent && driverParent.quit()
    driverChild && driverChild.quit()
  }
}

run().catch((err) => {
  console.log(err)
})
