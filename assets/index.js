//Packages needed to install
const fs = require('fs');
const inquirer = require('inquirer');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your desired title.',
        default: 'Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the repository.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Instruct users on how the installation process.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please include any tests that you may have.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include information on how to contribute',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include any tests that you may have.',
    },
];

//Template literal string for displaying/formatting the info
function generateMarkdown(dataUser) {
    //Create table of contents based on the users responses
    let tblOfContents = `## Table of Contents`;
  
    if (dataUser.installation !== '') { tblOfContents += `
    * [Installation](#installation)` };
  
    if (dataUser.usage !== '') { tblOfContents += `
    * [Usage](#usage)` };
  
    if (dataUser.contributing !== '') { tblOfContents += `
    * [Contributing](#contributing)` };
  
    if (dataUser.tests !== '') { tblOfContents += `
    * [Tests](#tests)` };

    // Title and description of markdown
    let titleMarkdown = 
    `# ${dataUser.title}
    
    ## Description
    *Include a description here:*

    ${dataUser.description}
    `

    //Inputing the table of contents
    titleMarkdown += tblOfContents

    //Inputing the license section
    titleMarkdown +=`
    * [License](#license)`;

    //Inputing the installation section
    if (dataUser.installation !== '') {
        titleMarkdown +=
        `
        ## Installation
        *Include installation steps here:
        ${dataUser.installation}`
    };
    
}

//Function to create the file
const fileName = 'ExampleREADME.md';
function writeFile(fileName, data) {
    const readmeFile = generateMarkdown(data);
    fs.writeFile(fileName, readmeFile, err => {
        if(err) {
            console.log(err)
        }
        console.log('ExampleREADME.md Created.')
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