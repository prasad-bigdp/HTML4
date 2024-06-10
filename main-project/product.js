const params = new URLSearchParams(window.location.search)
const id = params.get('pid')
const fetchData = async () =>
{
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    displayData(data)
}
fetchData()
const left = document.getElementById('left');
const right= document.getElementById('right')
const displayData = (data) =>
{
    const image = document.createElement('img');
    image.src = data.thumbnail
    image.alt= data.title
    left.append(image);
    const title = document.createElement('h2');
    title.textContent = data.title;
    const desc = document.createElement('p');
    desc.textContent = data.description;
    const price = document.createElement('p');
    price.textContent = "$" + data.price;
    const button = document.createElement('button');
    button.textContent = "Add to cart"
    right.append(title,desc,price,button)
    
}