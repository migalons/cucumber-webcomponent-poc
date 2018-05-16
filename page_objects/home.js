
const selector = {
    buttons: {
        shopNow: "shop-app shop-home .item::shop-button"
    }

}

let self = {
    go: function () {
        return driver.url('https://shop.polymer-project.org/')
            .waitForVisible(selector.buttons.shopNow, config.timeouts.visible);
    },
    perform: {
        click: {
            button: {
                shopNow: function () {
                    return driver.waitForVisible(selector.buttons.shopNow, config.timeouts.visible)
                        .click(selector.buttons.shopNow)
                }
            }
        }
    }
}

module.exports = self;