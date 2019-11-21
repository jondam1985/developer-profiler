const html = require("./generateHTML");
const fs = require("fs");

function writeToFile(fileName, color, user) {
    fs.writeFile(fileName, html.generateHTML(color, user), function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("developer profiled");
        }
    })
};

module.exports = {
    writeToFile: writeToFile
  }