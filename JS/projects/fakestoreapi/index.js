const mainDiv = document.getElementById("main")
function fetchData() {
	fetch("https://fakestoreapi.com/products")
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data);displayData(data)
        })
    .catch(function(err){console.log(err)})
}
fetchData()
function displayData (arr)
{
    console.log(arr);
    arr.forEach(function (p)
    {
        const div = document.createElement("div")
				div.classList.add("myProduct")
				const image = document.createElement("img")
        image.src = p.image
        image.alt = p.title;
        const ttile = document.createElement('h2')
        ttile.textContent = p.title;
        const price = document.createElement('p')
        price.textContent= "$"+p.price

				div.append(image,ttile,price)
				mainDiv.appendChild(div)
   })









}
