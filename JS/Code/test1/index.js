// write a function which takes data from a given link

function fetchData() {
	fetch("https://api.quotable.io/random")
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data);
            displayData(data)
		})
		.catch(function (err) {
			console.log(err)
		})
}
fetchData()
const mainDiv= document.getElementById('main')
const button = document.getElementById('btn')
 button.addEventListener('click', fetchData)
// setInterval(function ()
// {
//     fetchData(); 
// },5000)
function displayData (quote)
{
    console.log(quote)
    mainDiv.textContent=""
    const myDiv = document.createElement('div') //<div></div>
    myDiv.classList.add('quote')//<div class="quote"></div>
    const para = document.createElement('p');
    para.textContent = quote.content;
    const author = document.createElement('h3');
    author.textContent = quote.author
    myDiv.append(para, author)
    mainDiv.appendChild(myDiv)
}