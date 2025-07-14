import { Locator, Page } from '@playwright/test';
import testdata from '../../fixtures/LandAllot.json';

export class LandAllotmentPage {
  readonly page: Page;

  // Auth fields
  readonly loginLink: Locator;
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;

  // Navigation/menu
  readonly zoneMenu: Locator;
  readonly createApplicationButton: Locator;
  readonly ezDropdown: Locator;
  readonly zoneNameDropdown: Locator;

  // Form fields
  readonly parentCompany: Locator;
  readonly focalName: Locator;
  readonly focalDesignation: Locator;
  readonly applicationDateField: Locator;
  readonly datePickerDay: Locator;
  readonly parentCompanyAddress: Locator;
  readonly mobileFocal: Locator;
  readonly emailFocal: Locator;
  readonly leaseTypeDropdown: Locator;
  readonly investmentAmount: Locator;
  readonly investmentTypeDropdown: Locator;
  readonly projectCombobox: Locator;
  readonly plotSize: Locator;
  readonly plotTypeDropdown: Locator;
  readonly proposedPlotSize: Locator;

  // Checkbox and Submit
  readonly agreeCheckbox: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Auth
    this.loginLink = page.getByRole('link', { name: 'LOG IN' });
    this.loginEmail = page.getByRole('textbox', { name: 'Email' });
    this.loginPassword = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In' });

    // Navigation
    this.zoneMenu = page.locator('#card-layout').getByText(testdata.validAllot.zoneMenu);
    this.createApplicationButton = page.getByRole('button', { name: 'create new application Create' });
    this.ezDropdown = page.getByText(testdata.validAllot.ezDropdown);
    this.zoneNameDropdown = page.getByText(testdata.validAllot.zoneNameDropdown);

    // Form
    this.parentCompany = page.getByRole('textbox', { name: 'Parent Company *' });
    this.focalName = page.getByRole('textbox', { name: 'Name (Focal point 1) *' });
    this.focalDesignation = page.getByRole('textbox', { name: 'Designation (Focal point 1) *' });
    this.applicationDateField = page.locator('xpath=/html/body/div[1]/div/main/div/div[6]/div[2]/div[2]/div[1]/div[3]/div[2]/div/div[1]/div[7]/div[1]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/div/input[2]');
    this.datePickerDay = page.locator('div.flatpickr-day:not(.prevMonthDay):not(.nextMonthDay)').first();
    this.parentCompanyAddress = page.getByRole('textbox', { name: 'Parent Company Address *' });
    this.mobileFocal = page.getByRole('textbox', { name: 'Mobile no. (Focal point 1) *' });
    this.emailFocal = page.getByRole('textbox', { name: 'Email (Focal point 1) *' });
    this.leaseTypeDropdown = page.getByText('Lease Type AnnualUpfront');
    this.investmentAmount = page.getByRole('textbox', { name: 'Proposed Investment Amount (In Million USD) , numeric only, *' });
    this.investmentTypeDropdown = page.getByText('Investment Type:');
    this.projectCombobox = page.getByRole('combobox').filter({ hasText: 'No choices to choose from' });
    this.plotSize = page.getByRole('textbox', { name: 'Plot Size (In Acre) , numeric only, *', exact: true });
    this.plotTypeDropdown = page.getByText('Plot type DevelopedUndevelopedSpecialized Infrastructure');
    this.proposedPlotSize = page.getByRole('textbox', { name: 'Proposed Plot Size (In Acre' });

    // Checkbox and Submit
    this.agreeCheckbox = page.getByRole('checkbox', { name: 'I accept and agree to the' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async navigateToLogin() {
    await this.page.goto(testdata.validAllot.baseurl);
    await this.loginLink.click();
  }

  async login() {
    await this.loginEmail.click();
    await this.loginEmail.fill(testdata.validAllot.loginEmail);
    await this.loginPassword.click();
    await this.loginPassword.fill(testdata.validAllot.loginPassword);
    await this.loginButton.click();
  }

  async startApplication() {
    await this.zoneMenu.click();
    await this.createApplicationButton.click();
    await this.ezDropdown.click();
    await this.zoneNameDropdown.click();
  }

  async fillForm() {
    await this.parentCompany.click();
    await this.parentCompany.fill(testdata.validAllot.parentCompany);

    await this.focalName.click();
    await this.focalName.fill(testdata.validAllot.focalName);

    await this.focalDesignation.click();
    await this.focalDesignation.fill(testdata.validAllot.focalDesignation);


   // await this.page.locator('xpath=/html/body/div[1]/div/main/div/div[6]/div[2]/div[2]/div[1]/div[3]/div[2]/div/div[1]/div[7]/div[1]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div/div/input[2]').click();
  
   // await this.page.locator('div:nth-child(24) > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > span').first().click();
  await this.page.locator('.input-group > input:nth-child(2)').first().click();
await this.page.locator('div:nth-child(24) > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .flatpickr-monthDropdown-months').selectOption('7');
await this.page.getByLabel('August 13,').click();




    // Date picker
    
    
   // await this.applicationDateField.click();
   // await this.datePickerDay.click();

    await this.parentCompanyAddress.click();
    await this.parentCompanyAddress.fill(testdata.validAllot.parentCompanyAddress);

    await this.mobileFocal.click();
    await this.mobileFocal.fill(testdata.validAllot.mobileFocal);

    await this.emailFocal.click();
    await this.emailFocal.fill(testdata.validAllot.emailFocal);

    await this.leaseTypeDropdown.click();
    await this.page.getByRole('option', { name: testdata.validAllot.leaseType }).click();

    await this.investmentAmount.click();
    await this.investmentAmount.fill(testdata.validAllot.investmentAmount);

    await this.investmentTypeDropdown.click();
    await this.page.getByRole('option', { name: testdata.validAllot.investmentType }).click();

    await this.projectCombobox.locator('div').first().click();
    await this.page.getByText(testdata.validAllot.projectName).click();

    await this.plotSize.click();
    await this.plotSize.fill(testdata.validAllot.plotSize);

    await this.plotTypeDropdown.click();
    await this.page.getByRole('option', { name: testdata.validAllot.plotType }).click();

    await this.proposedPlotSize.click();
    await this.proposedPlotSize.fill(testdata.validAllot.proposedPlotSize);
  }

  async submitForm() {
    await this.agreeCheckbox.check();
    await this.submitButton.click();
  }
}
