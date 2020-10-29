function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.title}</h1>
 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
This application is covered by the ${answers.license} license. 
## How to contribute
${answers.contribute}
## Tests
${answers.tests}
GitHub: ${answers.username}
Email: ${answers.email}
Copyright 2020 &copy;`;
}

module.exports = generateMarkdown;