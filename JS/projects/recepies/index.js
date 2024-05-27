const mainDiv = document.getElementById("main")

function fetchData() {
	fetch("https://api.sampleapis.com/recipes/recipes")
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data)
            displayData(data)
		})
}
fetchData()
function displayData(arr) {
	arr.forEach(function (val) {
		const div = document.createElement("div")
		div.classList.add("receipe")
		const image = document.createElement("img")
		image.src = val.photoUrl
		image.alt = val.title
		const title = document.createElement("h2")
		title.textContent = val.title
		const protein = document.createElement("p")
		protein.textContent = "Protein:" + val.protein
		const calories = document.createElement("p")
		calories.textContent = "Calories:" + val.calories
		const fiber = document.createElement("p")
		fiber.textContent = "Fiber:" + val.fiber
		div.append(image, title, protein, calories, fiber)
		mainDiv.appendChild(div)
	})
}
