import { test, expect, Page } from '@playwright/test'
import path from 'path';

test('Sanity of the journey', async ({ page }) => {

    const header = page.locator("((//div[@class='layout-container'])[1]//div//div)[1]");
    const footer = page.locator("(//div[@class='layout-container'])[3]");
    const verticalName = page.locator("(//div[contains(@class,'justify-between')])[1]");
    const progressLoader = page.locator("//div[@class='_progress-bar_116i0_16']");
    const progressPercentage = page.locator("//div[@class='_percentage_116i0_25']");
    const question = page.locator("//div[contains(@class,'header')]//h2|//h3");
    const question1 = page.locator("(//div[contains(@class,'header')]//h2|//h3)[2]");
    const descriptionBelowQuestion = page.locator("//div[contains(@class,'header')]//p");
    const descriptionBelowQuestion1 = page.locator("(//div[contains(@class,'header')]//p)[2]");
    const desciptionBelowoptions = page.locator("//div[contains(@class,'additionalDetails')]");
    const desciptionBelowoptions1 = page.locator("(//div[contains(@class,'additionalDetails')]//p)[2]");
    const lockIconPad = page.locator("//div[contains(@class,'justify-start')]//span[@class='font-medium']");
    const projectOptions = page.locator("//button[@type='button']//span");
    const textsOverImage = page.locator("//div[contains(@class,'_imageText')]//p");
    const advertiserDisclosure = page.locator("//div//a[@id='disclosurePopup']");
    const advertiserDisclosureText = page.locator("//div[@class='_modal_8wdkc_1']//p");
    const zipCode = page.locator("//input[@placeholder='Enter ZIP']");
    const continueCTA = page.locator("//div[contains(@class,'footer')]//button[@text='Button']");
    const backButton = page.locator("//div[@class='mt-[-5px] ml-2 font-medium']");
    const roofStyleOptions = page.locator("//div[contains(@class,'_icon_checkbox')]//p");
    const progressLoaderText = page.locator("(//div[contains(@class,'container')]//p)[1]");
    const secureIcon = page.locator("//div[contains(@class,'secured')]//p");
    const emailField = page.locator("(//div[contains(@class,'inputWrapper')]//input[@placeholder='Email Address'])");
    const firstNameField = page.locator("//div[contains(@class,'inputWrapper')]//input[@placeholder='First Name']");
    const lastNameField = page.locator("//div[contains(@class,'inputWrapper')]//input[@placeholder='Last Name']");
    const phoneField = page.locator("//div[contains(@class,'inputWrapper')]//input[@name='phone_number']");
    const tocCheckbox = page.locator("//div[contains(@class,'checkbox')]//span")
    const tocText = page.locator("//div//p[contains(@class,'terms')]");
    const resultLeftToh = page.locator("//div[contains(@class,'content--left')]//a");
    const resultHeaderTitle = page.locator("//div[contains(@class,'content--middle')]//h2[contains(@id,'header-title')]");
    const resultSeparatorLine = page.locator("//hr|//hr[contains(@class,'seperator')]");
    const resultChecklistHeader = page.locator("//div[contains(@class,'checklist')]//h1");
    const resultChecklistDescription = page.locator("(//div[contains(@class,'checklist')]//div)[1]");
    const resultFaqHeader = page.locator("//div[contains(@class,'faq')]//h1");
    const resultFaqDescription = page.locator("(//div[contains(@class,'faq')]//div)[2]");
    const resultRelatedCategories = page.locator("//div[contains(@class,'category')]//h3");
    
    await page.goto('https://roofing-uat.advisorjourney.forbes.com/');
    await expect(page).toHaveTitle("Roofing Journey");
    await expect(header).toHaveText('Powered by Forbes Advisor');
    await expect(footer).toBeVisible();
    await expect(verticalName).toBeVisible();
    await expect(progressLoader).toBeVisible();
    await expect(progressPercentage).toHaveText('20%');
    await expect(question).toHaveText('What type of roofing project are you considering?');
    await expect(descriptionBelowQuestion).toHaveText('This helps us understand your specific needs and provide you with accurate recommendations for your project.');
    await expect(desciptionBelowoptions).toHaveText('The most common weak spots on your roof are areas that need protection from flashing. However, damaged shingles or damage in the waterproofing material which lays underneath the shingles are also common causes of roof leaks.');
    await expect(lockIconPad).toHaveText('This experience is secured by Forbes Advisor');
   
    //To get the text content over the image
    for (let i = 0; i < await textsOverImage.count(); i++) {
        const textsInImage = await textsOverImage.nth(i);
        const imageText = await textsInImage.textContent();
        console.log(imageText);
    }
    await advertiserDisclosure.click();
    await expect(advertiserDisclosureText).toBeVisible();
    const adPopupText = await advertiserDisclosureText.textContent();
    console.log(adPopupText);

    // To select random option during each execution
    const randomOptionIndex = Math.floor(Math.random() * await projectOptions.count());
    const selectedOption = await projectOptions.nth(randomOptionIndex);
    let selectedOptionText = await selectedOption.textContent();
    console.log(selectedOptionText);
    await selectedOption.click();

    //zip code page
    await expect(backButton).toBeVisible();
    await expect(header).toHaveText('Powered by Forbes Advisor');
    await expect(footer).toBeVisible();
    await expect(verticalName).toBeVisible();
    await expect(lockIconPad).toHaveText('This experience is secured by Forbes Advisor');
    await expect(progressPercentage).toHaveText('40%');
    await expect(question).toHaveText('Let’s find roofing options in your area.');
    await expect(descriptionBelowQuestion).toHaveText('Please verify your home location so we can find the best partners in your area to serve you.');
    await expect(desciptionBelowoptions).toHaveText('Upgrading your roof can offer significant savings on energy costs and help protect your home from potential damage caused by harsh weather conditions.');
    await expect(continueCTA).toBeDisabled();
    await zipCode.fill('90201');
    await expect(continueCTA).toBeEnabled();
    await continueCTA.click();

    //style of your roof
    await expect(backButton).toBeVisible();
    await expect(header).toHaveText('Powered by Forbes Advisor');
    await expect(footer).toBeVisible();
    await expect(verticalName).toBeVisible();
    await expect(lockIconPad).toHaveText('This experience is secured by Forbes Advisor');
    await expect(progressPercentage).toHaveText('60%');
    await expect(question).toHaveText('What is the style of your roof?');
    await expect(desciptionBelowoptions).toHaveText('Did you know that approximately 75% of homes in North America have asphalt shingles on their roofs?');
    
    // To select random option during each execution
    const randomOptionIndex1 = Math.floor(Math.random() * await roofStyleOptions.count());
    const selectedOption1 = await roofStyleOptions.nth(randomOptionIndex1);
    let selectedOptionText1 = await selectedOption1.textContent();
    console.log(selectedOptionText1);
    await selectedOption1.click();

    //Email address page
    await expect(backButton).toBeVisible();
    await expect(header).toHaveText('Powered by Forbes Advisor');
    await expect(footer).toBeVisible();
    await expect(verticalName).toBeVisible();
    await expect(lockIconPad).toHaveText('This experience is secured by Forbes Advisor');
    await expect(progressPercentage).toHaveText('90%');
    await expect(question1).toHaveText('Where can we send your roofing estimate?');
    await expect(descriptionBelowQuestion1).toHaveText('You could save up to 40% on your roofing costs through special offers with roofing companies.');
    await expect(desciptionBelowoptions1).toHaveText('We’ve identified some potential savings and discounts for you based on the location you provided.');
    await expect(progressLoaderText).toHaveText('Preparing to send your estimate');
    await expect(secureIcon).toHaveText('Secured by Forbes Advisor');
    await expect(lockIconPad).toHaveText('This experience is secured by Forbes Advisor');
    await expect(continueCTA).toBeDisabled();
    await emailField.fill('ForbesTes_923*@gmail.com');
    await expect(continueCTA).toBeEnabled();
    await continueCTA.click();

    //PII page
    await expect(backButton).toBeVisible();
    await expect(header).toHaveText('Powered by Forbes Advisor');
    await expect(footer).toBeVisible();
    await expect(verticalName).toBeVisible();
    await expect(progressLoader).toBeVisible();
    await firstNameField.fill('Test');
    await lastNameField.fill('Test');
    await phoneField.fill('(902) 328-9472');
    await expect(question1).toHaveText('Congratulations! Your personalized roofing estimate is ready. Secure it now.');
    await expect(descriptionBelowQuestion1).toHaveText('Remember to review your estimate and compare quotes. These are no-obligation offers. Speaking to an agent could save you up to 40%');
    await expect(continueCTA).toBeDisabled();
    await expect(secureIcon).toHaveText('Secured by Forbes Advisor');
    const termsText = await tocText.textContent();
    console.log(termsText);
    await tocCheckbox.check();
    await expect(continueCTA).toBeEnabled({timeout: 8000});
    await continueCTA.click();

    await expect(resultHeaderTitle).toBeEnabled({timeout: 8000});

    //Result page
    //To get the result left content 
    for (let i = 0; i < await resultLeftToh.count(); i++) {
        const leftText = await resultLeftToh.nth(i);
        const leftContentText = await leftText.textContent();
        console.log(leftContentText);
    }
    await resultLeftToh.nth(0).click();
    await expect(resultHeaderTitle).toBeVisible();
    await resultLeftToh.nth(1).click();
    await expect(resultFaqHeader).toBeVisible();
    await resultLeftToh.nth(2).click();
    await expect(resultRelatedCategories).toBeVisible();
    
    //To validate the separator line
    const separatorCount = await resultSeparatorLine.count();
    await expect(separatorCount).toBe(4);
    for(let i=0; i<separatorCount; i++){
    await resultSeparatorLine.nth(i).isVisible();
    }
    await expect(resultChecklistHeader).toHaveText('Here’s how you can prepare for your roofing project');
    await expect(resultChecklistDescription).toHaveText('You can review this information to help you with your conversation');
    await expect(resultFaqHeader).toHaveText('Frequently Asked Questions');
    await expect(resultFaqDescription).toHaveText('Check out popular questions others like you have');

})
