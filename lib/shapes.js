
class Shapes {
    constructor(text, txtColor, shape, color){
        if(text.length < 3){
            throw new Error('`text` must contain 3 characters')
        }

        this.text = text;
        this.txtColor = txtColor;
        this.shape = shape;
        this.color = color;
    }
  
}


class Triangle extends Shapes {
    constructor(text, txtColor, shape, color){
        super(text, txtColor, shape, color)
    }
    
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
   
     <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> 
   
     <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>
   
   </svg>`
    }
}

class Circle extends Shapes {
    constructor(text, txtColor, shape, color){
        super(text, txtColor, shape, color)
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
    
     <circle cx="150" cy="100" r="80" fill="${this.color}"/>
    
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>
    
    </svg>`
    }
}

class Square extends Shapes {
    constructor(text, txtColor, shape, color){
        super(text, txtColor, shape, color)
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
   
     <rect x="50" y="10" width="200" height="200" fill="${this.color}" /> 
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>
   
   </svg>`
    }
}

module.exports = Triangle
module.exports = Circle
module.exports = Square