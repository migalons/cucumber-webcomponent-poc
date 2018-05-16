"use strict";

exports.config = {
    "webdriver": {
        "desiredCApabilities": {
            "browserName": "chrome",
            "chromeOptions": {
                "args": ["--disable-web-security"]
            }
        },
        "protocol": "http",
        "host": "localhost",
        "port": 4444
    },
    "logLevel": "error",
    "timeouts": {
        "scenario": 10000,
        "pageLoad": 5000,
        "visible": 2000
    },
    "url": "https://shop.polymer-project.org/"
};