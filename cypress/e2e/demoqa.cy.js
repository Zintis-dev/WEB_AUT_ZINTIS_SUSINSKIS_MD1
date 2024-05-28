import { SelectablePage } from "../pageObjects/SelectablePage";

describe("Demoqa", () => {
    context("MD1 Scenarios", () => {
        beforeEach(() => {
            SelectablePage.visit();
        });

        it("Selectable objects", ()=> {
            SelectablePage.gridButton.click();

            const buttonsToClick = ["Two", "Four", "Six", "Eight"];
            const buttonsNotClicked = ["One", "Three", "Five", "Seven", "Nine"];

            buttonsToClick.forEach(buttonText => {
                SelectablePage.buttonConainer.contains(buttonText).click();
                SelectablePage.buttonConainer.contains(buttonText).should("have.class", "active");
            });

            buttonsNotClicked.forEach(buttonText => {
                SelectablePage.buttonConainer.contains(buttonText).should("not.have.class", "active");
            });
        });
    });
});