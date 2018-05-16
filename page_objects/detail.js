
const selector = {
    button: {
        addtoShoppingCart: "shop-app shop-detail button"
    }

}

let self = {
    go: async function () {

    },
    perform: {
        click: {
            button: {
                addtoShoppingCart: function () {
                    return driver.waitForVisible(selector.button.addtoShoppingCart, config.timeouts.visible)
                        .click(selector.button.addtoShoppingCart)
                }
            }
        }
    }
}

module.exports = self;