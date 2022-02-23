// let boxesArea = document.getElementById('boxes-area');


// for (let i = 1; i < 100 .length; i++) {
//     console.log(i);
//     boxesArea.innerHTML += `<div class="box">${i}</div>`  
// }

let container = document.getElementById("boxes-area");


for(let i = 1; i <= 100; i++){

    box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
    
    if(i%3 == 0 && i%5 == 0){
        box.innerHTML = "FizzBuzz";
    }
    
    else if(i%3 == 0){
        box.innerHTML = "Fizz";
    }

    else if(i%5 == 0){
        box.innerHTML = "Buzz";
    }

    else{
        box.innerHTML = i;
    }
}
