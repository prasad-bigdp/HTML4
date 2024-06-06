function sum (...b)
{
    const x= [ 2,...b,5,9]
   return b.reduce((p,c)=>p+c,0)
}
const result = sum(5,6,7)
console.log(result)

let obj = {
    name: "Prasad",
    age: 50,
    salary: 85555,
}
let { name, salary } = obj
const arr= [2,5,9]
const [a,b,c]= arr
console.log(salary, a)

// prototype inheritance

let arr2 = [5, 8, 9, 6]
console.log(arr2)

let obj2 = Object.create(obj)
console.log(obj2, obj2.name)
console.log(obj2.__proto__.__proto__.__proto__)


































