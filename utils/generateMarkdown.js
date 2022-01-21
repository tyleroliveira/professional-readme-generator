// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }


const generateMarkdown = ({projectTitle, description, installation, usage, contributing, testInstructions, license, github, email }) =>


`# ${projectTitle}
## Description
${description}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${installation}
## Usage
${usage}
## License
${license}
---
## Badges
## How to Contribute
${contributing}
## Tests
${testInstructions}
## Github
${github}
## Email
${email}`;

module.exports = generateMarkdown;