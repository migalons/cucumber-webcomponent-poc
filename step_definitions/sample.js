const {Given, When, Then}  = require("cucumber");
const poHome = require("../page_objects/home");
const poList = require("../page_objects/list");
const poDetail = require("../page_objects/detail");
const poHeader = require("../page_objects/header");

Given('a user at the polymer shopping app', async function () {

    await poHome.go();

});

When('he adds an item the the cart', async function () {

    await poHome.perform.click.button.shopNow();
    await poList.perform.click.item.any();
    await poDetail.perform.click.button.addtoShoppingCart();

});

Then('customer cart is updated', async function () {

    let number = await poHeader.get.shoppingCartItemsNumber();
    if(number !== "1") {
        throw("Error. Items expected: 1. Got items: " + number)
    }

});