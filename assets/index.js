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
        name: 'title',
        message: 'Please enter your desired title.'
    },
];

//Template literal string for displaying/formatting the info
function generateMarkdown(data) {
    return `##${data.title}
    `
}