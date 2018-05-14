'use strict';

const path = require('path');
const minimist = require('minimist');
const fs = require('fs');

let baseProfiles = {
    "base": "--world-parameters={\"config\":\"config/base.js\"}",
    "no-colours": " --format-options '{\"colorsEnabled\": false}'"
};

module.exports = function () {
    let requestedProfiles = minimist(process.argv.slice(2)).p || minimist(process.argv.slice(2)).profile;
    let customizedProfile = baseProfiles;

    if(typeof requestedProfiles == "string") {
        requestedProfiles = new Array(requestedProfiles);
    };

    for(let i in requestedProfiles) {
        let requestedProfile = requestedProfiles[i]
        if(!baseProfiles[requestedProfile]) {
            let configFilePath = path.resolve(requestedProfile);
            try {
                fs.accessSync(configFilePath, fs.constants.R_OK);
                customizedProfile[requestedProfile] =  `--world-parameters '{"config": "${requestedProfile}"}'`
            } catch (e) {
                console.error(e)
            }
        }
    }
    // if(baseProfiles[requestedProfile]) {
    //     return baseProfiles;
    // } else {
    //     let configFilePath = path.resolve(requestedProfile);
    //     try {
    //         fs.accessSync(configFilePath, fs.constants.R_OK);
    //         customizedProfile[requestedProfile] =  `--world-parameters '{"config": "${requestedProfile}"}'`
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    return customizedProfile
}();