//Packages needed to install
const fs = require('fs');
const inquirer = require('inquirer');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your desired title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the repository.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Instruct users on how the installation process.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include information on how to contribute'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include any tests that you may have.'
    },
];

//Template literal string for displaying/formatting the info
function generateMarkdown(data) {
    return `#${data.title}
    ##${data.description}
    ##${data.installation}
    ##${data.contributing}
    ##${data.tests}
    `;
}

//Function to create the file
const fileName = 'README.md';
function writeFile(fileName, data) {
    const readmeFile = generateMarkdown(data);
    fs.writeFile(fileName, readmeFile, err => {
        if(err) {
            console.log(err)
        }
        console.log('README.md Created.')
    })
}

//Function which runs the previous function
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeFile(fileName, data)
    })
}

init()

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions