const fs = require('fs');
const inquirer = require('inquirer');

// Function to create the SVG file
function createSVGFile(filename, text, shapeType, textColor, shapeColor) {
  let shapeMarkup = '';

  switch (shapeType) {
    case 'circle':
      shapeMarkup = `<circle cx="150" cy="100" r="75" fill="${shapeColor}" /> 
      <text x="150" y="100" font-size="4em" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>`;
      break;
    case 'triangle':
      shapeMarkup = `<polygon points="75, 175 225, 175 150, 25" fill="${shapeColor}" />
      <text x="150" y="130" font-size="3em" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>`;
      break;
    case 'square':
      shapeMarkup = `<rect x="62.5" y="12.5" width="175" height="175" fill="${shapeColor}" />
      <text x="150" y="100" font-size="4em" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>`;
      break;
    default:
      console.log('Invalid shape');
      return;
  }

  const svgContent = `<svg width="300" height="200">
    ${shapeMarkup}
  </svg>`;

  fs.writeFileSync(`examples/${filename}.svg`, svgContent);
}
  
// Prompt user for input using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'filename',
      message: 'What do you want to call your file? Please do not include filetype.',
      default: 'my_logo',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Which characters do you want on your SVG? Choose up to three.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What is your desired text color? RGB values and Hex code may be used.',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Which shape do you want?',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What is your desired shape color? RGB values and Hex code may be used.',
    },
  ])
  .then((answers) => {
    const { filename, text, textColor, shapeType, shapeColor } = answers;

    createSVGFile(filename, text, shapeType, textColor, shapeColor);
  
    console.log(`Generated ${filename}.svg`);
  })  
  .catch((error) => {
    console.log('An error occurred:', error);
  });

module.exports = createSVGFile;

