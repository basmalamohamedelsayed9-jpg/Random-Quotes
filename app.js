let quote = document.querySelector(".quote")
let btn = document.querySelector(".btn")
let copy=document.querySelector(".copy")
let  toast = document.querySelector(".toast");

import { quotes } from "./quotes.js";
btn.addEventListener("click", function () {
    
   var newQuote =quotes[Math.floor(Math.random()* quotes.length)]
    quote.innerHTML = `"${newQuote.text}"`
})
copy.addEventListener("click",()=>{
     var newQuote =quotes[Math.floor(Math.random()* quotes.length)]
   navigator.clipboard.writeText(newQuote.text)
     toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

})
