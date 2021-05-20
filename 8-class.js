class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }

    gender = 'male';

    hello() {
        console.log(this.name + ' sad hello!')
    }
}

/*
const bek = new Person('Bek', 20);
console.log(bek);
console.log(bek.gender);
bek.hello();

console.log(bek.__proto__=== Person.prototype);
 */


//Class inheritance
class Programmer extends Person {
    constructor(name, age, job) {
        super(name, age = 0);    // parent constructor
        this._job = job;
    }

    //get and set
    get job() {
        return this._job;
    }

    set job(job) {
        this._job = job;
    }

    hello() {    // rewritten method
        super.hello(); //parent method
        console.log('Rewritten method');
    }
}

const bek = new Programmer("Bek", 20, "Frontend");

console.log(bek);
bek.hello();
console.log(bek.job);
bek.job = 'Backend';
console.log(bek.job);

//Static method

class Util {
    static avg(...args) {
        return args.reduce((add, i) => add += i, 0) / args.length;
    }
}

// const fi = new Util();
// console.log(fi.avg(1,1,2,3,5,8,13,21));

console.log(Util.avg(1,1,2,3,5,8,13,21));