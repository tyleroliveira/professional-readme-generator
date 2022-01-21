// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app


const init = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'projectTitle',
          message: 'What is your project title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Describe your project.',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How is it used?',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'How can others contribute?',
        },
        {
          type: 'input',
          name: 'testInstructions',
          message: 'Enter test instructions.',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license does your project have?',
            choices: [
                'MIT',
                'GNU GPLv3',
                'GNU AGPLv3',
                'GNU LGPLv3',
                'Apache 2.0',
                'Mozilla Public License 2.0',
                'Boost Software License 1.0',
                'The Unlicense',
                'Other'
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
      ])
      .then((answers) => {
        const mdPageContent = generateMarkdown(answers);
    
        fs.writeFile('README.md', mdPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
  }
  
  init();
  