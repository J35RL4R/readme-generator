const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
const questions = [
    {
        type: "input",
        message: "Enter GitHub username.",
        name: "username"
    },
    {
        type: "input",
        message: "Enter email address.",
        name: "email"
    },
    {
        type: "input",
        message: "Enter project's title.",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "Choose which license should your project.",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "Enter any possible install dependencies.",
        name: "installation",
        default: "npm install"
    },
    {
        type: "input",
        message: "What command(s) are needed to run tests.",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What do user's need to know about the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "How should users contribute to the repository?",
        name: "contribute"
    },

]
const init = async () => {
    try {
        console.log("Readme generator running. \n Please answer the following questions:")
        const answers = await promptUser();
        const fileContent = generateMd(answers);
        await writeToFile("./output/README.md", fileContent);
        console.log("README.md created.");
    } 
    catch (err) {
        console.error("Error");
        console.log(err);
    }
}
const promptUser = () => {
    return inquirer
        .prompt(questions);
}

const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}
init();