const mainDiv = document.getElementById("movies")
const movies = [
	{
		name: "Heramandi",
		url: "https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW4qUetA-FI88eYnf2z5HOxDGQiS9udGr356qaKWHjLxn5X2VoTnoQ1i6x83kMqMRCCoMhioTcUBl7LlTk9BVeqL34xQtF8LJ-BxAVQb3AxU00MJ7GsxVCCrL5EMsXpyqs7kRhkJakidYyx3rPKyY72R-LRcntusq_bQ_cdPNQljJ9jbUVEpXejvHjZ_YeShah5x2Mk9MBgbre9VgPs0UI1957xWHx98mQk8FHe5F8Vvr2hR5e1H653_g7MmOqeWZFlsS-GD1NMUpp2Bw_wnXrcFWKSwK9RNVNfehTePzbpghEu0BOx6py0KFjni3eEa2XeswvhCNGcCg8CzYxN2cpWrTJngULgcr5rTYYDoXwJYCPxLLPo.jpg?r=66f",
	},
	{
		name: "The Great Kapil Show",
		url: "https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSM75z6ZHa0FVbW1Niw8khIz-zS0BHlSE21bNTzDrP1mHe3id4L79i1pgPmd9oRswLGBrf7Aw8swNTWvvBQMD8aOrB0dVMhwwdFl8ZHCNV-nraG3CWFTi2sn8JxHdTd8gC6CUKbTjUdBy7YSGmqlyrV_Z9b1jpm22rQIvb3ugjEjMn2hYVxhhbkShd3BQP9S4ymkvC5yhIlSAjkSrZaNHUtqOofsZdzj7HjTZcHctLbOeFlZxkdCBRmPcvORrQ3PpLoBQb_eNn671Nlg0ou540hke58Fo5SzWyLtTS8sc6Jjc69NC-mA8gEGXGjCF9vy1KqXJvWkR8gfXnoVl8XkAVDOI5mX12XICP7avsxFDl5Lwe64LjiWaPWBD-GStlfCNVUDqyEGLYFrBJvAi7hUy9flw5AJzXO6CD50OmVNIM7ihpusYCL5KG1cKjS6GnKN5vqfQhNmH6REFGSSGaBhfKBefPptYr781dBqr09181k52eIgcXdusJNWH4mfkAu8UlU.jpg?r=e22",
	},
	{
		name: "Amar Singh Chamila",
		url: "https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTC3EtgbWMT9lOOx3-t2tQz-vf5mFoTA_3Hj41Uo_i-r_0E0Obui7nyjbJuSwmNiKC4whETh7soFT8oh6POmcBssMrDFwTbWnGXHoeLtorhGhEMRftvtqUbbtyS8bTjg_trV.jpg?r=856",
	},
]
function displayData() {
    movies.forEach(function (m)
    {
        const myDiv = document.createElement('div')
        myDiv.classList.add('movie')
        const image = document.createElement("img") //<img src="" alt=""/>
				image.src = m.url
				image.alt = m.name
				const title = document.createElement("h2")
        title.textContent = m.name
        myDiv.append(image,title)
				mainDiv.appendChild(myDiv)
    })
}
displayData()
