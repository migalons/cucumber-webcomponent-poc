const {Given, When, Then} = require("cucumber");

Given('a user at the polymer shopping app', function () {
    return driver.url('https://shop.polymer-project.org/')
        .waitForVisible("shop-app paper-icon-button[icon='shopping-cart']", config.timeouts.visible)

});

When('he adds an item the the cart', function () {
    return driver.waitForVisible("shop-app shop-home shop-button", 5000)
        .click("shop-app shop-home shop-button")
        .waitForVisible("shop-app shop-list shop-list-item shop-image", 5000)
        .click("shop-app shop-list shop-list-item shop-image")
        .waitForVisible("shop-app shop-detail button", 5000)
        .click("shop-app shop-detail button")
});

Then('customer cart is updated', function () {
    return driver.waitForVisible("shop-app div.cart-btn-container")
        .getText("shop-app div.cart-btn-container").then((text) => {
            if(text === "1") {
                return Promise.resolve();
            } else {
                return Promise.reject("Error. Shopping cart is not propertly updated. Text: " + text);
            }
        });
});