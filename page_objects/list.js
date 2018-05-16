
const selector = {
    items: {
        any: "shop-app shop-list shop-list-item shop-image"
    }
}

let self = {
    go: async function () {

    },
    perform: {
        click: {
            item: {
                any: function () {
                    return driver.waitForVisible(selector.items.any, config.timeouts.visible)
                        .click(selector.items.any)
                }
            }
        }
    }
}

module.exports = self;