console.log("arrays")
let arr = [2, 5, 8, 9, 6, 7, 3];
console.log(arr.length)
console.log(arr.push(5), arr)
console.log(arr.pop(), arr)
console.log(arr.unshift(12), arr)
console.log(arr.shift(), arr)
console.log(arr.splice(3, 0, 5, 6, 8, 9), arr)
console.log(arr.slice(2, 6), arr);
/* small task ... take an array elements and print them in console using for, for of, for in */

for (let x = 0; x < arr.length; x++){console.log(arr[x])}
for (let x of arr)
{
    console.log(x)
}
for (let x in arr)
{
    console.log(arr[x])
}

let newArray=["raj","jessi","vani"].forEach(function (x)
{
    console.log(x.toUpperCase().charAt(0));
    return x.toUpperCase().charAt(0)
})
console.log(newArray)

let newArray2 = ["raj", "jessi", "vani"].map(function (x) {
	console.log(x.toUpperCase().charAt(0))
	return x.toUpperCase().charAt(0)
})
console.log(newArray2)


let newArray3 = [2,5,8,9,7,6,4,12].filter(function (x) {
	return x%2==0
})
console.log(newArray3);

let result=[1, 5, 6, 8, 9].reduce(function (c,p)
{
    return c+p
},0)
console.log(result)

console.log(arr)
console.log(arr.some(function (x)
{
    return x>8
}))
console.log(
	arr.findIndex(function (x) {
		return x > 8
	}),
)
console.log(
	[9,15,12,8,2].sort()
)
console.log(arr.reverse())
console.log(["raj","prasad"].join("  "))

console.log(arr.includes(9))

/* take an array of names and returns an array of reversed names in respective order
["raj","ravi"]==>["jar","ivar"]*/
let res=["raj", "ravi"].map(function (str)
{
return str.split("").reverse().join("")
})
console.log(res)

/* take an array of names and return only the names that ends with "dixit" as a new array   */ 
let res1=["raj bhatt", "vani dixit"].filter(function (str)
{
    return str.endsWith("dixit")
})
console.log(res1)

/* remove duplicates in an array  
eg:[2,3,5,7,2,6,3]=>
    [2,3,5,7,6] */







