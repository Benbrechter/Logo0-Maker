const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes')




inquirer
.prompt([
    {
        type: 'input',
        message: 'What text would you like in your logo?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like the text in your logo?',
        name: 'txtColor',
    },
    {
      type: 'input',
      message: 'What would you like the color of your image?',
      name: 'color',
    },
    {
        type: 'list',
        message: 'Which shape would you like your logo?',
        name:'shape',
        choices: ['square', 'triangle', 'circle'],

    }
])
.then((response) => {

    if(response.shape === 'circle'){
      const circle = new Circle(response.text, response.txtColor, response.color);
      
      const circleLogo = circle.render(response);
      fs.writeFile('dist/logo.svg', circleLogo, (err) => 
      err ? console.log(err) : console.log('Generated logo.svg'))
     
    }else if(response.shape === 'triangle'){
      const triangle = new Triangle(response.text, response.txtColor, response.color);
      
      const triangleLogo = triangle.render(response);
      fs.writeFile('dist/logo.svg', triangleLogo, (err) => 
      err ? console.log(err) : console.log('Generated logo.svg'))

    }else if(response.shape === 'square'){
        const square = new Square(response.text, response.txtColor, response.color);
        
        const squareLogo = square.render(response);
        fs.writeFile('dist/logo.svg', squareLogo, (err) => 
        err ? console.log(err) : console.log('Generated logo.svg'))
      }else{
        console.log(err);
      }
})