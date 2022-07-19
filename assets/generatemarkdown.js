//Template literal string for displaying/formatting the info
function generateMarkdown(dataUser, userInput) {
    //Create table of contents based on the users responses
    let tblOfContents = `## Table of Contents`;
  
    if (dataUser.installation !== '') { tblOfContents += `
    * [Installation](#installation)` };
  
    if (dataUser.usage !== '') { tblOfContents += `
    * [Usage](#usage)` };
  
    if (dataUser.contributing !== '') { tblOfContents += `
    * [Contributing](#contributing)` };
  
    if (dataUser.tests !== '') { tblOfContents += `
    * [Tests](#tests)` };

    // Title and description of markdown
    let titleMarkdown = 
    `# ${dataUser.title}
    
    ## Description
    *Include a description here:*

    ${dataUser.description}
    `

    //Inputing the table of contents
    titleMarkdown += tblOfContents

    //Inputing the license section
    titleMarkdown +=`

    * [License](#license)

    `;

    //Inputing the installation section
    if (dataUser.installation !== '') {
        titleMarkdown +=
        `

        ## Installation

        *Include installation steps here:*

        ${dataUser.installation}
        `
    };

    //Inputing the Usage section
    if (dataUser.usage !== '') {
        titleMarkdown +=
        `

        ## Usage

        *Include information about usage:*

        ${dataUser.usage}
        `
    };

    //Inputing the Contributing section
    if (dataUser.contributing !== '') {
        titleMarkdown +=
        `

        ## Contributing

        *Include information about the contributors:*

        ${dataUser.contributing}
        `
    };

    //Inputing the Tests section
    if (dataUser.tests !== '') {
        titleMarkdown +=
        `
        ## Tests

        *Include information about the Tests:*

        ${dataUser.contributing}
        `
    };

    //Inputing License section
    titleMarkdown +=
    `
    ## License

    ${dataUser.license}
    `;

    //Inputing Questions section
    let questionSection = 
    `

    ## Questions?

    Feel free to contact me if you have any questions!
    
    GitHub: [#${userInput.githubName}](${dataUser.GithubURL})`;
    titleMarkdown += questionSection;
    return titleMarkdown;
    
}
module.exports = generateMarkdown;
