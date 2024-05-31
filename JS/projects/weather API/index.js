const input = document.getElementById("inp")
const btn = document.getElementById("btn")
const mainDiv = document.getElementById("data")
btn.addEventListener("click", fetchData)
async function fetchData() {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value},IN&APPID=9e51ce689208b36d90f8e425de2e268f`,
    )
    const data = await res.json()
    displayData(data)
}
function displayData (data)
{
    console.log(data);
    const icon = document.createElement('img')
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const des = document.createElement('p')
    des.textContent = data.weather[0].description;
    const temp = document.createElement('h3')
    temp.innerHTML = Math.round(data.main.temp - 273) + "<sup>0</sup>C"
    mainDiv.append(icon,des,temp)
}





