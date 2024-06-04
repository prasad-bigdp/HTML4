//Object oriented programming
class Employee
{
    name; age; salary;
    static x = 25;
    constructor(name,age,salary)
    {
        this.name = name
        this.age = age
        this.salary = salary
    }
    displayData ()
    {
        console.log(this.name,this.age,this.salary)
    }

}
class Manager extends Employee{
	promotion
    constructor(n, a, s, p)
    {
        super(n,a,s)
		this.promotion = p
	}
	displayData() {
		console.log(this.name, this.age, this.salary,this.promotion)
	}
}
function sum (a, b)
{
    return a+b
}
export default sum
export {Manager,Employee}


