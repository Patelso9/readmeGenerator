// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) {
    return ""
  }
  return `![License](https://img.shields.io/badge/License-${license.replace('-','%20')}-blue.svg)\n`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == null) {
    return ""
  }
  return `https://opensource.org/licenses/${license}\n`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var section = ""
  // var lic = JSON.stringify(license).split(",")
  for(l of license){
    section += (renderLicenseBadge(l) + "\n" + renderLicenseLink(l) + "\n")
    }
  return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title},

  ## Description
  ${data.description},

  ## Table of Contents
  * [Licenses](#licenses)
  * [Usage Instructions](#usage-instructions)
  * [Instilation Details](#instilation-details)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Testing Instructions](#testing-instructions)
  * [Demo](#demo)
  * [Questions](#questions)

  ## Licenses 
   ${data.license}

  ${renderLicenseSection(data.license)}

  ## Usage Instructions
    ${data.usage},
  
  ## Instilation Details
    ${data.instal},

  ## Contribution Guidelines
    ${data.contribution},

  ## Testing Instructions
    ${data.test},

  ## Demo
  [${data.demo}]

  ## Questions
  How to rech me with additional questions

  Email: ${data.email},
  
  Github: https://github.com/${data.github},
`;
}

module.exports = generateMarkdown;
