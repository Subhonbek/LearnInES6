/*
//Rest
function avg(a, b, ...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
}
console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9));
//We use it when we don't know how many argument we will have
*/

/*
//Spread
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...arr);
const newArr = [0, ...arr];//create clone array
console.log(...newArr);
//this unwrap object
*/

/*
//Destructuring array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const a = arr[0];
//const b = arr[1];
const [a, b] = arr;
console.log(a, b)
//22 and 23 lines equal to 24 line
const [c, ...d] = arr;
//d it's array
console.log(c, d)

const arr2 = [1, undefined, 3, 4, 5, 6, 7, 8, 9];
const [a2, b2 = 100, , ...c2] = arr2;
console.log(a2, b2, c2);
*/

/*
//Destructuring object
const address = {
    country: 'Russia',
    city: 'Kzn',
    id: 123,
    concat: function () {
        return `${this.country}, ${this.city}`
    }
}

console.log(address.concat());
const {country, id, concat} = address;
console.log(country, id);
console.log(concat.call(address));

const {city = 'Msc', ...rest} = address;
console.log(city, rest);//rest it's object

const newAddress = {
    ...address,
    city: 'Msc',
    id: 124
}
console.log(newAddress);
*/