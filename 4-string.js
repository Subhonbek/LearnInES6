/*
//'', "", `` 1,2 its standard 3 we can use variable and object inside the text by dint of ${}
const title = 'Hello';
const template = `<h1>${title}</h1>`;
 */

/*
//also preserves space and does von conflict with other quotes
const title = 'Hello';
const isVisible = () => Math.random() > 0.5;
const template = `
    ${isVisible() ? `<p1>visible</p1>` : ''}
    <h1 id = 'title' style="color: black">${title}</h1>
`;
console.log(template);
*/

/*
//new Method
const str = 'hello';

console.log(str.startsWith(`${'h'}`)) //checks if our word begin arg. 'h'
console.log(str.endsWith(`${'o'}`)) //checks if our word ending arg. 'o'

console.log(str.includes('l')) //checks if our word including arg. 'l'

console.log(str.repeat(3)) //create duplicate

console.log(str.trim()) //removes space in start and end
console.log(str.trimEnd())
console.log(str.trimStart())

console.log(str.padStart(10)) //point out min length and padding with space in start
console.log(str.padEnd(10)) //point out min length and padding with space in end
*/