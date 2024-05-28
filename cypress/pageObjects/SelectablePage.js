import { BasePage } from "./BasePage";

export class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get gridButton() {
        return cy.get("[id='demo-tab-grid']");
    }

    static get buttonConainer() {
        return cy.get("[class='list-group list-group-horizontal-sm']");
    }
}