//control statements or decision making statements will decide control flow based on a condition
// if
function isEvenOdd (x)
{
    
		if (x % 2 == 0) {
            console.log(`${x} is even`)
            return true;
		} // simple if
		else {
            console.log(`${x} is odd`)
            return false
    }
    /* waf which takes age as input and return true if he is eligible to vote else false*/
}

function eligiblity (age)
{
    if (age >= 18)
        return true;
    else
        return false;
}

/* multiple condition checking -- if else if */
function PON (num)
{
    if (num > 0) return "Positive"
    else if (num < 0) return "negitive"
    else return "Zero"
}
console.log("The number is "+PON(21))

/* if inside another if --- nested if */
console.log(largeSmall(5, 8, 6))
function largeSmall (a, b, c)
{
    if ((a == b) && (b == c))
        return false
        else
   return [
			a > b ? (a > c ? a : c) : b > c ? b : c,
			a < b ? (a < c ? a : c) : b < c ? b : c,
		]
}







// switch (option)
// {
//     case "A": console.log("hi"); break;
//     case "B": console.log("bye"); break;
//     default: console.log("whatever");
// }

//console.log(calc (5,6,"mul"))
//"add", "sub", "mul", "div", "mod", "pow"



















































// switch