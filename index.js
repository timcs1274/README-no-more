//Packages needed to install
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')
const axiosCall = require('./assets/axiosfile');
const generateMarkdown = require('./assets/generatemarkdown');


//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your desired title.',
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
        name: 'contributing',
        message: 'Please include information on how to contribute',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include any tests that you may have.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license:',
        choices: ['MIT License', 'Apache License 2.0', 'The Unlicense']
    },
];

//function to create file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('README.md created.')
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {
        const dataUser = await inquirer.prompt(questions);
        const userInput = await axiosCall.getUser(dataUser);
        const markdown = generateMarkdown(dataUser, userInput);
        await writeFileAsync('ExampleREADME.md', markdown)
    } catch (err) {
        console.log(err);
    }
};

init();

