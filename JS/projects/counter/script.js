let c = 0;
const para = document.getElementById('count')
const inp = document.getElementById('inp');
const op= document.getElementById('output')

function incr ()
{
    ++c;
    para.textContent = c;
}
function myLogic ()
{
    console.log(inp.value)
    op.textContent= inp.value.split("").reverse().join("")
}
/*<div id="counter">
        <p id="count">0</p>
        <button onclick="incr()">+</button>
    </div>*/