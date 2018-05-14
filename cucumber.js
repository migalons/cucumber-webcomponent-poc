'use strict';

const path = require('path');
const minimist = require('minimist');
const fs = require('fs');

let profiles = {
    "base": "--world-parameters={\"config\":\"config/base.js\"}"
};

module.exports = function () {
    let requestedProfile = minimist(process.args.slice(2)).p || minimist(process.args.slice(2)).profile;
    let customizedProfile = {};

    if(profiles[requestedProfile]) {
        return profiles;
    } else {
        let configFilePath = path.resolve(requestedProfile);
        try {
            fs.accessSync(configFilePath, fs.constants.R_OK);
            customizedProfile[requestedProfile] = `--world-parameters '{"config": "${requestedProfile}"}'`
        } catch (e) {
            console.error(e)
        }
    }

    return customizedProfile
}