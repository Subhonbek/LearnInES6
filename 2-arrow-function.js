/*
//standard function for JavaScript
function sum(a, b) {
    return a + b;
}
*/

/*
//for arrow function we creat variable (let,const,var)
const sum = (a, b) => {
    return a + b;
}
*/

/*
//feature of arrow function code shortening if one string is returned
let sum = (a, b) => a + b;
*/

//how to work function to 'this'
//Context
/*
function notArrow() {
    console.log(this);
}
const arrow = () => console.log(this);

const person = {
    name: 'Bek',
    age: 20,
    notArrow: notArrow(), //output correct
    arrow: arrow(), //output empty because his have not context the dont create context we can use it
    displey: function (){
        setTimeout(function (){
            console.log(this.age + ' ' + this.name);
        })
    }
}*/

