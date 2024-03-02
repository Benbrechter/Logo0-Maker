const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./utils/generateSvg');

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
        type: 'list',
        message: 'Which shape woulf you like your logo?',
        name:'shape',
        choices: ['square', 'triangle', 'circle'],

    },
    {
        type: 'input',
        message: 'What would you like the color of your image?',
        name: 'color',
    },
    
])
.then((data) => {
    const svgImg = generateSvg(data);
    fs.writeFile('dist/logo.svg', svgImg, (err) => 
       err ? console.log(err) : console.log('Success!')
      );
})