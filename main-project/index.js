const mainDiv = document.getElementById("main")

const fetchData = async () => {
	const res = await fetch("https://dummyjson.com/products")
	const data = await res.json()
	displayData(data)
}
const displayData = (data) => {
	console.log(data)
	data.products.forEach((pro) => {
		const prod = document.createElement("div")
		const title = document.createElement("h2")
		prod.classList.add("myclass")
		title.textContent = pro.title
		const link = document.createElement("a")
		link.href = `./product.html?pid=${pro.id}`
		link.target = "_blank"
		const image = document.createElement("img")
		image.src = pro.thumbnail
		image.alt = pro.title
		const price = document.createElement("p")
		price.textContent = "$" + pro.price
		const button = document.createElement("button")
		button.textContent = "Add to cart"
		button.addEventListener('click',()=>addCart(pro))
		link.appendChild(title)
		prod.append(image, link, price, button)
		mainDiv.appendChild(prod)
	})
}
const cart = [];
let c = 0;
const addCart = (p) =>
{
	
	console.log(cart)
	document.querySelector('#cart span').textContent = ++c;
	localStorage.setItem('cartItems',cart.push(p))
}
fetchData()
