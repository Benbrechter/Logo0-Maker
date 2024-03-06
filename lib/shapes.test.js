const { Triangle, Circle, Square } = require('./shapes')


test('should render a black triangle with white text', () => {
    const shape = new Triangle('Ben','white', 'black');
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="black"/><text x="150" y="145" font-size="60" text-anchor="middle" fill="white">Ben</text></svg>`;
expect(shape.render()).toBe(expected);
})

test('should render a red circle with black text', () => {
    const shape = new Circle('Ben', 'black', 'red');
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Ben</text></svg>`
    expect(shape.render()).toBe(expected);
})

test('should render a yellow square with black text', () => {
    const shape = new Square('Ben', 'black', 'yellow' );
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="10" width="200" height="200" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Ben<text></svg>`
    expect(shape.render()).toBe(expected);
})

