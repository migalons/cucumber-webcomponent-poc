const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const path = require("path");
const wdio = require('webdriverio');
const winston = require('winston');
const wdioWebcomponents = require("wdio-webcomponents");


function CustomWorld({attach, parameters}) {

    global.config = require(path.resolve(parameters.config)).config;

    global.log = winston;
    log.level = config.logLevel;

    setDefaultTimeout(config.timeouts.scenario);

    global.driver = wdio.remote(config.webdriver);
    //override native methods with wdio-webcomponents driver
    wdioWebcomponents.init(driver);

}

setWorldConstructor(CustomWorld);
