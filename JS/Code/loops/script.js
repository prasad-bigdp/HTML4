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
function mnemonicGenerator (str)
{
    var arr = str.split(" ")
    var str2 = "";
    var k = 0;
    while (k < arr.length)
    {
        str2 = str2 + arr[k].charAt(0).toUpperCase();
    }
    return str2

}

//  pallindrome("madam")





 

















    


