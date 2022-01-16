let ulList = document.getElementById("ulList");
let input = document.getElementById("inp");
let btn = document.getElementById("btn");

btn.addEventListener("click", handleClick);
function handleClick(e) {
    if (input.value) {
        let button = document.createElement("button");
        button.classList.add("buttonlar")
        //button.style.backgroundColor = "red";
        button.innerText = "x";
        button.style.cursor = "pointer";
        button.addEventListener("click", xremove);
        let li = document.createElement("li");
        li.classList.add("liLer");
        let val1 = input.value;
        li.innerText = val1;
        ulList.appendChild(li);
        li.append(button);
        li.style.display = "flex";
        li.style.justifyContent = "space-between";


        // ulList.style.alignItems = "center";

        input.value = "";
    } else {
        alert("LÜTFEN DEĞER EKLEYİNİZ")
    }
}

delbtn = document.getElementById("del");
delbtn.addEventListener("click", del);
function del() {
    let xxx = document.querySelectorAll("li");
    for (let i = 0; i < xxx.length; i++) {
        xxx[i].remove();

    }
    input.value = "";
}


function xremove(e) {
    //console.log(e.target);
    let xBut = document.getElementsByClassName("liLer")
    e.target.parentElement.remove();
}







