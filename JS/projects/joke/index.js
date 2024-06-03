const mainDiv = document.getElementById('output')
const fetchData = async () =>
{
    const res = await fetch("https://official-joke-api.appspot.com/random_joke") 
    const data = await res.json()
    displayData(data)
}
fetchData()
const displayData = (data) =>
{
    mainDiv.textContent=""
    const jokeDiv = document.createElement('div')
    jokeDiv.textContent = data.setup;
    const punchDiv = document.createElement('div')
    punchDiv.textContent = data.punchline;
    punchDiv.style.display="none"
    const btn = document.createElement('button')
    btn.textContent = "reveal"
    btn.addEventListener('click', () =>
    {
        punchDiv.style.display="block"
    })
    const btn2 = document.createElement("button")
		btn2.textContent = "new joke"
		btn2.addEventListener("click", fetchData)
    mainDiv.append(jokeDiv,punchDiv,btn,btn2)
    
}