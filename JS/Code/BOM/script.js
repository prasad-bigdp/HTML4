console.log(this)
a = 20
console.log(window.a)
function display() {
	console.log("my function")
}
window.display()
//BOM- Browser Object Model
// storage: browser store data in three ways
//1. localStorage -- perminant storage in browser
//2. sessionStorage -- stored until browser is closed(browser session)
//3. cookies

localStorage.setItem("myValue", a)
sessionStorage.setItem("myValue", a)
function something() {
    window.navigator.geolocation.getCurrentPosition((co) =>
    {
        const { latitude, longitude } = co.coords;
        console.log(latitude,longitude)
    })
}

something()
document.getElementById('btn').addEventListener('click',startVideo)
const vd= document.getElementById('vd')
async function startVideo ()
{
    const myvideo = await window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    console.log(myvideo)
  vd.srcObject = myvideo
}