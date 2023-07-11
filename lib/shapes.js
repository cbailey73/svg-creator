class Triangle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(shapeColor) {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
    }
  }
  
  class Circle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(shapeColor) {
      return `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    }
  }
  
  class Square {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(shapeColor) {
      return `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  