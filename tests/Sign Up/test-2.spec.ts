import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.1.125:31710/registration');

  await page.getByRole('textbox', { name: 'Name: *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name: *', exact: true }).fill('shanto');
  await page.getByText('Enter your typeRemove item').click();
  await page.getByText('Local Investor').click();
  await page.getByText('Select your economic zoneRemove item').click();
  await page.getByText('Government Owned Economic Zone').click();
  await page.getByText('Select zone nameRemove item').click();
  await page.getByText('Bangladesh Special Economic').click();
  await page.getByRole('checkbox', { name: 'Does have Land Lease Agreement' }).check();
  await page.getByText('Select your nationalityRemove').click();
  await page.getByText('Bangladeshi').click();
  await page.getByRole('radio', { name: 'National ID' }).check();
  await page.getByRole('textbox', { name: 'National ID: *' }).click();
  await page.getByRole('textbox', { name: 'National ID: *' }).fill('1234567j');
  await page.getByRole('textbox', { name: 'Select your date of birth' }).click();
  await page.getByRole('spinbutton', { name: 'Year' }).click();
  await page.getByRole('spinbutton', { name: 'Year' }).fill('1999');
  await page.getByLabel('June 2,').click();
  


  await page.getByRole('textbox', { name: 'Designation: *' }).click();
  await page.getByRole('textbox', { name: 'Designation: *' }).fill('cse-eng');
  await page.getByText('Select your countryRemove item').click();
  await page.getByRole('option', { name: 'Bangladesh' }).click();

  await page.getByText('Select your divisionSelect').click();
  await page.getByText('Rajshahi').click();
  await page.getByText('Select your districtRemove').click();
  await page.getByText('Natore').click();
  await page.getByRole('textbox', { name: 'Address Line 1: *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1: *' }).fill('anna, 23,42c,kal012');
  await page.getByRole('textbox', { name: 'Address Line 2:' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2:' }).fill('poc, fa,tt');
  await page.getByRole('textbox', { name: 'ZIP/Post Code:' }).click();
  await page.getByRole('textbox', { name: 'ZIP/Post Code:' }).fill('11215');
  await page.getByText('Select countryRemove item').click();
  await page.getByText('880').click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('1838909');
  await page.getByText('Select a company typeRemove').click();
  await page.getByText('Existing company').click();
  await page.getByRole('textbox', { name: 'Company Name: *' }).click();
  await page.getByRole('textbox', { name: 'Company Name: *' }).fill('penta555');
  await page.getByText('Select a countryRemove item').click();
  await page.getByRole('option', { name: 'Bangladesh' }).locator('span').click();
  await page.getByText('Select a divisionRemove item').click();
  await page.getByRole('option', { name: 'Chattagram' }).locator('span').click();
  await page.getByText('Select a districtRemove item').click();
  await page.getByRole('option', { name: 'Feni' }).click();
  await page.getByText('Select a thanaRemove item').click();
  await page.getByText('Chhagalnaiya').click();
  await page.getByRole('link', { name: 'browse Browse to attach file for Copy of MOA:. Allowed file types: application/' }).click();
// Locate the hidden file input inside the link (if it's there) and upload the file
  const fileInput = page.locator('input[type="file"]'); // Adjust the selector if necessary
  await fileInput.setInputFiles('/home/shanto/Downloads/210003545-dolu-nodir-howa-pdf.pdf');
  await page.getByRole('link', { name: 'browse Browse to attach file for Land lease agreement:. Allowed file types:' }).click();
// Locate the hidden file input inside the link (if it's there) and upload the file
  const fileInput2 = page.locator('input[type="file"]'); // Adjust the selector if necessary
  await fileInput2.setInputFiles('/home/shanto/Downloads/210003545-dolu-nodir-howa-pdf.pdf');// Click on the browse link to trigger the file input





  await page.getByRole('link', { name: 'browse Browse to attach file for Copy of AoA:. Allowed file types: application/' }).click();
  const fileInput3 = page.locator('input[type="file"]'); // Adjust the selector if necessary
  await fileInput3.setInputFiles('/home/shanto/Downloads/210003545-dolu-nodir-howa-pdf.pdf');// Click on the browse link to trigger the file input

  await page.getByRole('link', { name: 'browse Browse to attach file for Details of Signatory (Form XII):. Allowed file' }).click();
  const fileInput4 = page.locator('input[type="file"]'); // Adjust the selector if necessary
  await fileInput4.setInputFiles('/home/shanto/Downloads/210003545-dolu-nodir-howa-pdf.pdf');// Click on the browse link to trigger the file input


  await page.getByRole('link', { name: 'browse Browse to attach file for Authorization Letter' }).click();
  const fileInput5 = page.locator('input[type="file"]'); // Adjust the selector if necessary
  await fileInput5.setInputFiles('/home/shanto/Downloads/210003545-dolu-nodir-howa-pdf.pdf');// Click on the browse link to trigger the file input


  await page.getByRole('link', { name: 'browse Browse to attach file for Scan of NID/Passport:. Allowed file types:' }).click();
  const fileInput6 = page.locator('input[type="file"]'); // Adjust the selector if necessary
  await fileInput6.setInputFiles('/home/shanto/Downloads/210003545-dolu-nodir-howa-pdf.pdf');// Click on the browse link to trigger the file input


  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  const fileInput7 = page.locator('input[type="file"]'); // Locate the actual input file element
await fileInput7.setInputFiles('/home/shanto/Pictures/Screenshots/Screenshot from 2025-06-17 13-55-41.png');
  await page.getByRole('checkbox', { name: 'I have read and agree to the' }).check();
  

  await page.getByRole('textbox', { name: 'User Email: *' }).click();
  await page.getByRole('textbox', { name: 'User Email: *' }).fill('shantoshaniul@gmail.com');
  await page.getByRole('textbox', { name: 'Password: *', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password: *', exact: true }).fill('1234');
  await page.getByRole('textbox', { name: 'Confirm Password: *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password: *' }).fill('1234');
  await page.getByRole('checkbox', { name: 'I have read and agree to the' }).check();
  await page.getByRole('button', { name: 'SUBMIT' }).click();









});
