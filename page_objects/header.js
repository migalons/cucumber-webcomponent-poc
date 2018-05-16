
const selector = {
    button: {
        addtoShoppingCart: "shop-app div.cart-btn-container"
    }

}

let self = {
    go: async function () {

    },
    get: {
      shoppingCartItemsNumber: function () {
          return driver.waitForVisible(selector.button.addtoShoppingCart, config.timeouts.visible)
              .getText("shop-app div.cart-btn-container")
      }
    },
    perform: {
        click: {
        }
    }
}

module.exports = self;