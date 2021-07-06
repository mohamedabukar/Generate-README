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
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'test',
    },
   {
       type: 'input',
       message: 'License for application.',
       name: 'license',
   },
   {
       type: 'input',
       message: 'What is your GitHub username',
       name: 'github'
   },
   {
       type: 'input',
       message: 'What is your email?',
       name: 'email'
   }
];

inquirer
.prompt(questions)
.then(response => {
    console.log(response)
    writeToFile('README.md', response);
})

// TODO: Create a function to write README file
function writeToFile(README, response) {
    var writeFile = 
`# ${response.title} ${response.License}
# Description
${response.description}
# Table of contents
* [Installation](#installation) 
* [usage](#usage)
* [contribution Guidelines](#contribution-guidelines)
* [test instructions](#test-instrcutions)
* [license](#license)
* [Github](#github)
* [Email](#email)
# Installation
${response.installationInstructions}
# Usage
${response.usage}
# Contribution guidelines
${response.contribution}
# Test instructions
${response.test}
# license
${response.license} is the license that this this application is covered under.
# Questions
* My gitHub.[Github](https://github.com/${response.github})
* Here is my email.${response.email}
    `
    fs.writeFile(README,writeFile, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });;
    }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
