const gf = document.getElementById('gf');
const f = document.getElementById('f');
const c = document.getElementById('c');
const btn = document.getElementById('btn')
btn.addEventListener('click', function () { alert("hi button") },true)
c.addEventListener("click", function () {
	alert("hi child")
},true)
f.addEventListener("click", function () {
	alert("hi father")
},true)
gf.addEventListener("click", function () {
	alert("hi grand father")
},true)