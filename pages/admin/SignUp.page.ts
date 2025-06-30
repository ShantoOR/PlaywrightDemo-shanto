import { Locator, Page } from '@playwright/test';
import testdata from '../../fixtures/testdata.json';

export class SignUpPage {
  readonly page: Page;

  // Form fields locators
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly phone: Locator;
  readonly companyName: Locator;
  readonly nationality: Locator;
  readonly addressLine1: Locator;
  readonly addressLine2: Locator;
  readonly zipCode: Locator;
  readonly mobile: Locator;
  readonly designation: Locator;

  // Dropdowns & radio buttons locators
  readonly typeDropdown: Locator;
  readonly zoneDropdown: Locator;
  readonly zoneNameDropdown: Locator;
  readonly divisionDropdown: Locator;
  readonly districtDropdown: Locator;
  readonly thanaDropdown: Locator;
  readonly companyTypeDropdown: Locator;

  // Buttons
  readonly submitButton: Locator;

  // Checkboxes
  readonly agreeCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initializing form fields
    this.name = page.getByRole('textbox', { name: 'Name: *', exact: true });
    this.email = page.getByRole('textbox', { name: 'User Email: *' });
    this.password = page.getByRole('textbox', { name: 'Password: *', exact: true });
    this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password: *' });
    this.phone = page.getByRole('textbox', { name: 'Enter mobile number' });
    this.companyName = page.getByRole('textbox', { name: 'Company Name: *' });
    this.nationality = page.getByText('Select your nationalityRemove');
    this.addressLine1 = page.getByRole('textbox', { name: 'Address Line 1: *' });
    this.addressLine2 = page.getByRole('textbox', { name: 'Address Line 2:' });
    this.zipCode = page.getByRole('textbox', { name: 'ZIP/Post Code:' });
    this.mobile = page.getByRole('textbox', { name: 'Enter mobile number' });
    this.designation = page.getByRole('textbox', { name: 'Designation: *' });

    // Dropdowns and radio buttons
    this.typeDropdown = page.getByText('Enter your typeRemove item');
    this.zoneDropdown = page.getByText('Select your economic zoneRemove item');
    this.zoneNameDropdown = page.getByText('Select zone nameRemove item');
    this.divisionDropdown = page.getByText('Select your divisionSelect');
    this.districtDropdown = page.getByText('Select your districtRemove');
    this.thanaDropdown = page.getByText('Select a thanaRemove item');
    this.companyTypeDropdown = page.getByText('Select a company typeRemove');

    // Buttons
    this.submitButton = page.getByRole('button', { name: 'SUBMIT' });

    // Checkbox
    this.agreeCheckbox = page.getByRole('checkbox', { name: 'I have read and agree to the' });
  }

  async navigate() {
    await this.page.goto(testdata.validuser.baseurl);
  }

  async fillForm() {
    await this.name.click();
    await this.name.fill(testdata.validuser.name);
    await this.typeDropdown.click();
    await this.page.getByText(testdata.validuser.typeDropdown).click();
    await this.zoneDropdown.click();
    await this.page.getByText(testdata.validuser.zoneDropdown).click();
    await this.zoneNameDropdown.click();
    await this.page.getByText(testdata.validuser.zoneNameDropdown).click();
    await this.page.getByRole('checkbox', { name: 'Does have Land Lease Agreement' }).check();
    await this.nationality.click();
    await this.page.getByText(testdata.validuser.nationality).click();
    await this.page.getByRole('radio', { name: testdata.validuser.idType }).check();
    await this.page.getByRole('textbox', { name: 'National ID: *' }).click();
    await this.page.getByRole('textbox', { name: 'National ID: *' }).fill(testdata.validuser.nationalId);
    await this.page.getByRole('textbox', { name: 'Select your date of birth' }).click();
    await this.page.getByRole('spinbutton', { name: 'Year' }).fill(testdata.validuser.birthYear);
    await this.page.getByLabel(testdata.validuser.birthDateLabel).click();
    await this.designation.click();
    await this.designation.fill(testdata.validuser.designation);
    await this.page.getByText('Select your countryRemove item').click();
    await this.page.getByRole('option', { name: testdata.validuser.country }).click();
    await this.divisionDropdown.click();
    await this.page.getByText(testdata.validuser.division).click();
    await this.districtDropdown.click();
    await this.page.getByText(testdata.validuser.district).click();
    await this.addressLine1.fill(testdata.validuser.addressLine1);
    await this.addressLine2.fill(testdata.validuser.addressLine2);
    await this.zipCode.fill(testdata.validuser.zipCode);
    await this.page.getByText('Select countryRemove item').click();
    await this.page.getByText(testdata.validuser.mobileCountryCode).click();
    await this.mobile.fill(testdata.validuser.mobile);
    await this.companyTypeDropdown.click();
    await this.page.getByText(testdata.validuser.companyType).click();
    await this.companyName.fill(testdata.validuser.companyName);
    await this.page.getByText('Select a countryRemove item').click();
    await this.page.getByRole('option', { name: testdata.validuser.companyCountry }).locator('span').click();
    await this.page.getByText('Select a divisionRemove item').click();
    await this.page.getByRole('option', { name: testdata.validuser.companyDivision }).locator('span').click();
    await this.page.getByText('Select a districtRemove item').click();
    await this.page.getByRole('option', { name: testdata.validuser.companyDistrict }).click();
    await this.page.getByText('Select a thanaRemove item').click();
    await this.page.getByText(testdata.validuser.companyThana).click();

  }

  async handleFileUploads() {
    await this.page.getByRole('link', { name: 'browse Browse to attach file for Copy of MOA:. Allowed file types: application/' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('Files/demo.pdf');
    await this.page.getByRole('link', { name: 'browse Browse to attach file for Land lease agreement:. Allowed file types:' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('Files/demo.pdf');
    await this.page.getByRole('link', { name: 'browse Browse to attach file for Copy of AoA:. Allowed file types: application/' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('Files/demo.pdf');
    await this.page.getByRole('link', { name: 'browse Browse to attach file for Details of Signatory (Form XII):. Allowed file' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('Files/demo.pdf');
    await this.page.getByRole('link', { name: 'browse Browse to attach file for Authorization Letter' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('Files/demo.pdf');
    await this.page.getByRole('link', { name: 'browse Browse to attach file for Scan of NID/Passport:. Allowed file types:' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('Files/demo.pdf');
    await this.page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    await this.page.locator('input[type="file"]').setInputFiles('/home/shanto/Pictures/Screenshots/Screenshot from 2025-06-17 13-55-41.png');
    
    await this.agreeCheckbox.check();
  }

  async fillEmailAndPassword() {
    await this.email.click();
    await this.email.fill(testdata.validuser.email);
    await this.password.click();
    await this.password.fill(testdata.validuser.password);
    await this.confirmPassword.click();
    await this.confirmPassword.fill(testdata.validuser.password);
  }

  async submitForm() {
    await this.submitButton.click({timeout: 40000});
  }
}
