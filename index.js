const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
        type: "list",
        message: "Choose a license to create your badge:",
        name: "license",
        choices: [
          { name: "MIT license", value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" },
          { name: "Apache License 2.0", value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
            { name: 'BSD 3-Clause "New" or "Revised" license', value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" },
            { name: "GNU General Public License (GPL)", value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" },
          ],
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