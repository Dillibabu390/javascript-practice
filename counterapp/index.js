

let count = 0;
let saveEl = document.getElementById("save-el")
let elementcount = document.getElementById("count-el");

function counter(){

     count = count + 1;
     elementcount.innerText = count;

}


function save() {
     let countStr = count + " - "
     saveEl.textContent += countStr
     console.log(count)
 }
 