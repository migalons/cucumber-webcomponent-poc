Feature: Sample feature

  Scenario: Shopping cart
    Given a user at the polymer shopping app
    When he adds an item the the cart
    Then customer cart is updated


  Scenario: Buy Android Nylon Packable Jacket
    Given a user at the polymer shopping app
    When he adds an "Android Nylon Packable Jacket" to the cart
    Then the "Android Nylon Packable Jacket" is included into the shopping cart