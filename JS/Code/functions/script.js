console.log(u)
function printData ()
{
    let a = 25;
console.log("data")
}
printData()
var u = 20;
// functions can also take parameter
function sum (a, b)
{
    console.log(a+b)
}
sum(5, 6)

// write a function to take a string and an interger n and print the nth letter in given string
//fun("prasad",3)==>a

var nthChar=function (str,n)
{
  return str.charAt(n-1)
}// function expression -- expressing functions as variable
// sometimes fns won't have any name, anonymous functions
var result = nthChar("prasad", 3)
console.log(result)
console.log(nthChar)


function x ()
{
    var a = 20;
    function y ()
    {
        a++;
        console.log(a)
    }
    return y;
}
var result = x();
console.log(result)
result();
result()
//closures-- inner fns can remember outer fns values
//memorization

















/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init)
{
    var c = init;
    var c2 = init;
    function increment () { return ++c; }
    function decrement () { return --c2; }
    function reset ()
    {
        return init
    }
    return increment, decrement, reset;
};
var a= createCounter(10)
a[0]
//callback functions
function mad ()
{
    console.log("i'm mad")
}
function bad ()
{
    console.log("i'm bad")
}
function xyz (a, b)
{
    a(); b();
}
xyz(mad, bad) // callback hell or pramid of doom

//operators
//Arithematic +,-,*,/,%,**
//logical && || !
//relational >,<,>=,<=, ==,===,!=,!==
//unary +,++,--
//Assignment +=,-=,*=,/=,%=,**=,=
//a+=2===> a=a+2
//conditional or ternary operator: 
var x = 25;
var a = (x > 35) ? 20 : 25;
console.log(a)



































/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */





