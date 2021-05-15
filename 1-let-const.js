/*
var str = "start"
if (true) {
    var str = "It's work!";
}
console.log(str); // show its work
*/

/*
let num = 0;
if (true) {
    let num = 1;
    console.log(num); //output 1
}
console.log(num); //output 0
*/

/*
//Hosting
//var vs let
num = 1; //appeal before we announced it
console.log(num); //output: if (we write 21-line) ? 1 : undefined
var num = 0;
//it not work for `let`
//if we use function its would be work
function funcNum_1(){
    num_1 = 1;
}
let num_1;
funcNum_1()
console.log(num_1);
*/

/*
const Color = `#000`;   //if we use basic type(number string boolean) we cant change value
                        //Color = `#fff` this not working
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  //if we using array we cant override to other object or type
                                             //arr = 0; this not working
//we can use method which change value
arr.push(`new element`);
console.log(arr);
//exactly also for the object
*/