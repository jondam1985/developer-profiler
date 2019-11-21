var inquirer = require("inquirer");
var axios = require("axios");
var writer = require("./docWriter");
var pdf = require("./pdfCreator");

const questions = [
    "github username",
    "favourite colour"
];

function init() {

inquirer
    .prompt([
        {
            name: "usernmane",
            message: questions[0],
            default: "jondam1985"
        },
        {
            type: "list",
            name: "colour",
            message: questions[1],
            choices: ["green", "blue", "pink", "red"]
        }
    ]).then(answers => {
        console.log(`Username: ${answers.usernmane}
    Favourite colour: ${answers.colour}`)

        axios
            .get(`https://api.github.com/users/${answers.usernmane}`)
            .then( response => {
                writer.writeToFile(`${answers.usernmane}.html`, answers.colour, response.data);
            })
            .catch(function(error) {
                console.log(error);
            })

            pdf.pdfCreate(answers.usernmane);
    })
};

init();