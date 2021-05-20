const symbol = Symbol('demo');
const other = Symbol('demo');
console.log(symbol);
console.log(other);
console.log(symbol==other); //uniq

const obj = {
    name: 'Bek',
    [symbol]: 'metaData'
}
console.log(obj);
for(let key in obj){
    console.log(key)
}
//more information
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol