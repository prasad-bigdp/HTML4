const api_key = "d3f6b22c"
const resultsDiv = document.getElementById("results")
const inputBox = document.getElementById("inp")
const btn = document.getElementById("btn")
btn.addEventListener("click", fetchData)
function fetchData() {
	fetch(`https://www.omdbapi.com/?s=${inputBox.value}&apikey=${api_key}`)
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data.Search);
            displayData(data.Search)
		})
		.catch(function (err) {
			console.log(err)
		})
}
function displayData (movies)
{
    movies.forEach(function (m)
    {
        const myDiv = document.createElement('div')  
        myDiv.classList.add('movie')
        const img = document.createElement('img')
        img.src = m.Poster;
        img.alt = m.Title;
        const title = document.createElement('h2')
        title.textContent = m.Title
        myDiv.append(img, title)
        resultsDiv.appendChild(myDiv)
    })
}