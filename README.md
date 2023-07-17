# SVG Creator

## Introduction
The purpose of this project is to enable the rapid creation of SVG files via a computer terminal, using the node, fs, and inquirer packages. Using only command line prompts, a user will be able to create a logo consisting of one of three shapes (a circle, triangle, or square) with up to three characters placed on top. Using this project, they will be able to create a simple logo without having to use traditional graphic design skills.

Several jest tests are provided, so that the user can check whether these logo creation functions work without having to try them themselves.

## Usage
In order for this project to work properly, the user must have first installed both node js (any version) and inquirer version 8.0.0 (later versions will disable the use of some of the Common JS code used in this project). They then need to navigate to the terminal for index.js. Once they are in the terminal, they need to type in "node index.js". The user will then be prompted to choose their desired file name, up to three logo characters, the color they want their characters to be, the shape they want their logo to be (a circle, triangle, or square), and the color of their shape. Then, their custom shape will be written as an svg file to the "examples" folder. The user can then copy their svg and do what they wish with it.

This project also includes jest tests. To run these tests, the user must first install any version of jest. Then, they can navigate to the terminal of shapes.test.js, located in the "lib" folder. Once in the terminal, they need only type in "npm test" to run these tests. Whether the test failed or succeeded will then be displayed in the terminal.

## License
This project is protected under an MIT license. Further details can be found in the "LICENSE" folder in the repository.

## Credits
This tutorial was followed to understand the components of an SVG and how to create them: https://www.w3schools.com/graphics/svg_intro.asp

This tutorial was used to create jest tests looking for specific strings within a function: https://jestjs.io/docs/expect 

This tutorial was followed to understand how to create mock files for jest testing: https://stackoverflow.com/questions/49359476/mock-a-function-from-another-file-jest

## Demonstration
To be displayed
