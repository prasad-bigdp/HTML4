const mainDiv = document.getElementById("results")
const input = document.getElementById("in")
const btn = document.getElementById("btn")
// arrow functions - ES6-2015
const sum = (a, b) => a + b
const fetchData = () => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
		.then((res) => res.json())
		.then((data) => displayData(data))
		.catch((err) => console.log(err))
}
btn.addEventListener("click", fetchData)

const displayData = (data) =>
{
    mainDiv.textContent=""
    const div = document.createElement('div')
    div.classList.add('pokemon')
    const image = document.createElement('img')
    image.src = data.sprites.other.home.front_default
    image.alt = data.name;
    const rightDiv = document.createElement('div')
    rightDiv.classList.add('rightdiv')
    const title = document.createElement('h2')
    title.textContent = data.name;
    const height = document.createElement('p')
    height.textContent ="height:"+ data.height;
     const weight = document.createElement("p")
    weight.textContent ="weight:"+ data.weight;
    rightDiv.append(title,height,weight)
    div.append(image, rightDiv);
    mainDiv.appendChild(div)
}





