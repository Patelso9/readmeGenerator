// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require ('path');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a breif desription of your project"
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "What licenses are being used?",
        choices: ['Apache-2.0', 'Artistic-2.0', 'BSL-1.0', 'EPL-1.0', 'gpl-3.0', 'IPL-1.0', 'ISC', 'MIT', 'MPL-2.0', 'OFL-1.1', 'Zlib'],
    },
    {
        type: 'input',
        name: 'instal',
        message: "Outline instilation intructions:"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How should the program be used?" 
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Contribution guidelines:" 
    },
    {
        type: 'input',
        name: 'test',
        message: "Testing Instructions:" 
    },
];

// TODO: Create a function to write README file using user input from above choices
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
};

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
       .then((response) => {
           console.log("Your readMe is being created....");
           writeToFile('README.md', generateMarkDown( { ...response } ) )
        })
        // .then(() => console.log('Successfully wrote to index.html'))
        // .catch((err) => console.error(err));

};

// Function call to initialize app
init();
