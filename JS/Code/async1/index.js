

// setInterval(function ()
// {
//     c++
//    console.log(c) 
// }, 5000)
setInterval(function ()
{
    let c = new Date()
    document.getElementById("clock").textContent = c.toLocaleTimeString()
    console.log("time")
}, 1000)
console.log("hello world")