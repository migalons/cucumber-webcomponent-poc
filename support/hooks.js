const {After, Before} = require('cucumber');

Before(function () {
    return driver.init()
        .url('https://shop.polymer-project.org/')
        .localStorage('DELETE')
});

After(function () {
    return driver.end();
});

