const licenseBadgeLinks = require("./license-badges-for-README");
function generateMarkdown(answers) {
  answers.licenseBadge = licenseBadgeLinks[answers.license];
  return `
${answers.title}
${answers.licenseBadge}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
${answers.description}
## Installation
To get dependencies, run:
\
${answers.installation}
\
## Usage
${answers.usage}
## License
${answers.license}
This application is covered by the ${answers.license} license. 
## How to contribute
${answers.contribute}
## Tests
\
${answers.tests}
\
GitHub: ${answers.username}
Email: ${answers.email}
Copyright 2020`;
}

module.exports = generateMarkdown;