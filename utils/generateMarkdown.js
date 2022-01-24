const generateMarkdown = ({projectTitle, description, installation, usage, contributing, testInstructions, license, badge, github, email }) =>
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
## License Badge
${license}
---
## How to Contribute
${contributing}
## Tests
${testInstructions}
## Github
${github}
## Email
${email}`;
module.exports = generateMarkdown;