const _ = require("lodash");
let base = require("./base.js").config;

exports.config = _.merge(base, {
    "webdriver": {
        "desiredCapabilities": {
            "browserName": "chrome",
            "chromeOptions": {
                "args": ["--disable-web-security"]
            }
        }
    },
    "logLevel": "debug"
})