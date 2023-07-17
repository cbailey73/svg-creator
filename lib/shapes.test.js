const fs = require('fs');
const createSVGFile = require('../index');

// Mock files created to avoid creating extra files during testing
jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

describe('createSVGFile', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Circle Test
  test('should create an SVG file with circle shape', () => {
    const filename = 'circle_shape';
    const text = 'ABC';
    const textColor = 'black';
    const shapeType = 'circle';
    const shapeColor = 'red';

    createSVGFile(filename, text, shapeType, textColor, shapeColor);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `examples/${filename}.svg`,
      expect.stringContaining('<circle cx="150" cy="100" r="75" fill="red" />')
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `examples/${filename}.svg`,
      expect.stringContaining(`<text x="150" y="100" font-size="4em" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>`)
    );
  });

  // Triangle Test
  test('should create a triangle shaped SVG', () => {
    const filename = 'triangle_shape';
    const text = 'XYZ';
    const textColor = 'white';
    const shapeType = 'triangle';
    const shapeColor = 'blue';

    createSVGFile(filename, text, shapeType, textColor, shapeColor);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `examples/${filename}.svg`,
      expect.stringContaining('<polygon points="75, 175 225, 175 150, 25" fill="blue" />')
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `examples/${filename}.svg`,
      expect.stringContaining(`<text x="150" y="130" font-size="3em" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>`)
    );
  });

  // Square Test
  test('should create a square shaped SVG', () => {
    const filename = 'square_shape';
    const text = '123';
    const textColor = 'purple';
    const shapeType = 'square';
    const shapeColor = 'yellow';

    createSVGFile(filename, text, shapeType, textColor, shapeColor);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `examples/${filename}.svg`,
      expect.stringContaining('<rect x="62.5" y="12.5" width="175" height="175" fill="yellow" />')
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `examples/${filename}.svg`,
      expect.stringContaining(`<text x="150" y="100" font-size="4em" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>`)
    );
  });

  // Catch Errors Test
  test('should handle invalid shapes and not create an SVG', () => {
    const filename = 'invalid_shape';
    const text = 'ABC';
    const textColor = 'black';
    const shapeType = 'invalid';
    const shapeColor = 'red';

    createSVGFile(filename, text, shapeType, textColor, shapeColor);

    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});

