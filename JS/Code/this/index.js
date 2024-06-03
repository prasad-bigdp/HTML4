console.log(this)
// this - current calling object
name="prasad"
function display (a,b)
{
    console.log(this.name,a+b)
}
let obj = {
	name: "raj",
	age: 55,
	printName: () => {
		console.log(this.name)
	},
	printName2: () => {
		console.log(this.name)
	},
}
//lexical scoping- scope of this
obj.printName() // raj
obj.printName2()
// three ways
display.call(obj, 2, 3)
display.apply(obj,[2,3])
let newBindMethod = display.bind(obj)
newBindMethod(2,3)




