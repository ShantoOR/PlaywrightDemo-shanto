import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomeBezaPage extends BasePage {
    readonly applicationMenu: Locator;
    readonly investmentClearanceMenu: Locator;

    constructor(page: Page) {
        super(page);

        // You may need to adjust these selectors based on the actual HTML structure
        this.applicationMenu = page.getByRole('button', { name: 'Application' });
        this.investmentClearanceMenu = page.getByRole('button', { name: 'Investment Clearance' });
    }

    async navigateToInvestmentClearance() {
        await this.waitForLoadState(); // Ensure page is loaded
        await this.applicationMenu.click(); // Expand sub-menu
        await this.investmentClearanceMenu.click(); // Navigate to target page
    }
}
