// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter project description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'testInstructions',
    },
   {
       type: 'list',
       message: 'License for application.',
       name: 'License',
        choices: ["IBM","ISC", "MIT"]
   },
   {
       type: 'input',
       message: 'What is your GitHub username',
       name: 'Github'
   },
   {
       type: 'input',
       message: 'What is your email?',
       name: 'Email'
   }
];

inquirer
.prompt(questions)
.then(response => {
    console.log(response)
    writeToFile(response);
})

// TODO: Create a function to write README file
function writeToFile(README, data) {
    var writeFile = `
#${response.title}
#Description
${response.description}
#Table of contents
[Installation](#installation-instructions) 
[usage](#usage)
[contribution Guidelines](#contribution-guidelines)
[test instructions](#test-instrcutions)
[license](#license)
[Github](#github)
[Email](#email)
    `
    fs.writeFile("./README.md",writeFile);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
