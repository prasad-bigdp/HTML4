//loops or iteration stmnts will run until condition fails
// 2 types , entry control loops -- while,for, exit control loops- do while
// any loops contains 3 statements initialization,condition,updation

var k = 20;
while (k < 30)
{
    console.log(k);
    k++;
}
// print 20 to 1 odd numbers in reverse using while loop
function reverseOdd (num)
{
    if (num % 2 == 0) num--;
    while (num >= 1)
    {
         console.log(num);
        num-=2;
        }
}
reverseOdd(49);

//do-while
var p = 15;
do
{
    console.log(p)
} while (p > 16)
    




// This is JS demo - TIJD
//["this","is","js","demo"]
function mnemonicGenerator (str)
{
    var arr = str.split(" ")

    var str2 = "";
    var k = 0;
    while (k < arr.length)
    {
        str2 = str2 + arr[k].charAt(0).toUpperCase();
        k++;
    }
    return str2

}

//  pallindrome("madam")
// var,let , const
console.log(a)
var a = 50;
var a = 20;// var variables can be redeclared
a = 80;
let b = 20;
b = 30;
// let,const should not be redeclared
const c = 20;
 // const cannot be reassigned

function x ()
{
    var p = 30;
    if (true)
    {
        var t = 20;
    }
    console.log(t)
}
x()
// print numbers 1 to 10 using for loop
for (let i = 1; i <= 10; i++)
{
    console.log(i)
}
// print 5 table values from 100 to 1 --> 100 95 90 

for (let i = 100; i >= 0;i-=5){console.log(i)}
const arr=[5,6,8.5,4,2,1]
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}

for (let i of arr) // arrays
{
    console.log(i)
}

for (let i in arr) //objects
{
    console.log(arr[i])

}
console.log("hello world")
    




// waf which accepts a sentence and returns an object which contains vowels,consonants,spaces,words
function myFun (str)
{
    let nv = 0, nc = 0, w = 0, s = 0
    
    for (let i of str)
    {
        if ((i == "a") || (i == "e") || (i == "i") || (i == "o") || (i == "u"))
            nv++;
        else if (i == " ")
            s++;
    }
    nc = str.length - (nv + s)
    w= str.split(" ").length
    return {
        vowels: nv,
        consonants:nc,spaces:s,words:w
    }
}
let result = myFun("this is my sentence")
console.log(result.vowels)

//unique value - none repeated value in an array
// [2,3,5,8,9,7,3,5,8,9,9]-- [2,7]
let arr2 = []
function uniqueGenerator (arr)
{
    for (let i of arr)
    {
        let c = 0;
        for (let j of arr)
        {
            if (i == j)
                console.log("hi")
             c++; 
        }
        if (c == 1) arr2.push(i)
    }  
    return arr2;
}

console.log(uniqueGenerator([2, 3, 5, 8, 9, 7, 3, 5, 8, 9, 9]))


//[2,8,5,2,1,6,3], 3
console.log([2, 8, 5, 2, 1, 6, 3].sort())
//[1,2,5,6,7,7,7,8,7,3,3,2]

















































// FOR LOOP





 

















    


