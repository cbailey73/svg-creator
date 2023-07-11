const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');


// Function to create the SVG file
// Function to create the SVG file
function createSVGFile(filename, text, shapeType, textColor, shapeColor) {
  let shapeMarkup = '';

  switch (shapeType) {
    case 'circle':
      shapeMarkup = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shapeMarkup = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
      break;
    case 'square':
      shapeMarkup = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
      break;
    default:
      console.log('Invalid shape');
      return;
  }

  const svgContent = `<svg width="300" height="200">
    ${shapeMarkup}
    <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  fs.writeFileSync(`examples/${filename}`, svgContent);
}
  
// Prompt user for input using inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'filename',
      message: 'Enter the name of the SVG file:',
      default: 'logo.svg',
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
  
    let shape;
  
    switch (shapeType) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape');
        return;
    }
  
    shape.setColor(shapeColor);
    createSVGFile(filename, text, shapeType, textColor, shapeColor);
  
    console.log(`Generated ${filename}`);
  })  
  .catch((error) => {
    console.log('An error occurred:', error);
  });
