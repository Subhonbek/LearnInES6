/*
const person = {

    age: '20',
    name: 'Bek',
    country: 'Russia',
    info: function () {
        return Object.keys(this) //with this we can refer to all key element of the object
    }
}
console.log(person.info()); //output [ 'age', 'name', 'country', 'info' ]
*/

/*
const cityFile = 'city';
const job = 'Frontend';

const person = {
    age: '20',
    name: 'Bek',
    job,    //equal job: job
    country: 'Russia',
    [cityFile + Date.now()]: 'Kzn', //dynamic keys
    info() {
        return Object
            .keys(this)
            .filter(key => key !== 'info')
            .map(key => this[key])
            .join(' ')
    }
};

console.log(person.info());
console.log(person)
*/

/*
//Method
const A = {a: 1};
const B = {b: 2};

console.log(Object.assign({}, A, B));     // Join A and B
                                          // the first variable specifies where to save the join
const C = {};
Object.assign(C,A,B);
console.log(C);

console.log(Object.entries(C)); // [ [ 'a', 1 ], [ 'b', 2 ] ]
console.log(Object.keys(C));    // [ 'a', 'b' ]
console.log(Object.values(C));  // [ 1, 2 ]
*/