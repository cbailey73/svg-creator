const fs = require('fs');
const inquirer = require('inquirer');
// const { Triangle, Circle, Square } = require('./lib/shapes.js');

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
      message: 'Enter the name of the SVG file:',
      default: 'logo',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ])
  .then((answers) => {
    const { filename, text, textColor, shapeType, shapeColor } = answers;

    createSVGFile(filename, text, shapeType, textColor, shapeColor);
  
    console.log(`Generated ${filename}`);
  })  
  .catch((error) => {
    console.log('An error occurred:', error);
  });
