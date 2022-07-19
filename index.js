//Packages needed to install
const fs = require('fs');
const inquirer = require('inquirer');
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
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license:',
        choices: ['MIT License', 'Apache License 2.0', 'The Unlicense']
    },
];