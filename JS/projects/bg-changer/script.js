const colors=["red","blue","pink","orange","black"]
function change ()
{
    const randomNumber ="#"+Math.floor(Math.random() * 10000000).toString(16);
    const random2 = "#"+Math.floor(Math.random() * 10000000).toString(16);
    document.body.style.background=`linear-gradient(${randomNumber},${random2})`
}
function darkLight ()
{
    document.body.classList.toggle('dark')
}
/* <button id="btn" onclick="darkLight()">dark</button>
<p>Lorem ipsum dolor s</p>
 <button onclick="change()">click me</button>*/