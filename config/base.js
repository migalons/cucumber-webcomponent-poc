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
        "scenario": 40000,
        "pageLoad": 15000,
        "visible": 15000
    },
    "url": "https://shop.polymer-project.org/"
};