const form = document.getElementById("sform");
const box = document.getElementById("sbox");
const btn = document.getElementById("btn");
const res = document.getElementById("sresult");
const more = document.getElementById("more");

//Access key: KXHbAj72nrKn0Sde2ozX2LckxRYERoVyZgm5o7MpwPs

let keyword = " ";
let page = 1;

const access = "KXHbAj72nrKn0Sde2ozX2LckxRYERoVyZgm5o7MpwPs";

async function search(){
    keyword = box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1)
    {
        res.innerHTML = " ";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        res.appendChild(imageLink);
    })
    more.style.display = "block";
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    search();
})

more.addEventListener("click", ()=>{
    page++;
    search();
})
