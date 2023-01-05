const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");


const url = "https://api.quotable.io/random"


const getthoughts=()=>{
    fetch(url).then(data=>data.json()).then(item=>{
        quote.innerText = item.content
        author.innerText = item.author;
    })
}

btn.addEventListener("click",getthoughts);