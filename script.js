// let boxesArea = document.getElementById('boxes-area');


// for (let i = 1; i < 100 .length; i++) {
//     console.log(i);
//     boxesArea.innerHTML += `<div class="box">${i}</div>`  
// }

let boxesArea = document.getElementById("boxes-area");


for(let i = 1; i <= 100; i++){

    box = document.createElement("div");
    box.classList.add("box");
    boxesArea.append(box);
    
    if(i%3 == 0 && i%5 == 0){
        box.innerHTML = "FizzBuzz";
        box.classList.add("color-one");

    }

    else if(i%3 == 0){
        box.innerHTML = "Fizz";
        box.classList.add("color-two");
    }

    else if(i%5 == 0){
        box.innerHTML = "Buzz";
        box.classList.add("color-three");
    }

    else{
        box.innerHTML = i;
    }
}
