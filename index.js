let boxes = document.querySelectorAll(".innerBox");
let data = document.getElementsByTagName("h1");
let clearbutton = document.getElementById("btnClear");
let winnerName = document.getElementById("winner");
let turn = document.getElementById("turn");
let upsideDownSpider = document.getElementById("upsideDownSpider");

let count = 0;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        count++;

        if (count % 2 == 0) {
            boxes[i].firstElementChild.innerText = "X";
            data[i].style.textShadow =
                "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FE0000, 0 0 30px #FE0000, 0 0 40px #FE0000, 0 0 55px #FE0000, 0 0 75px #FE0000";
            data[i].style.color = "#FFFFFF";
            turn.innerText = "O";
            // data[i].classList.add("mystyle");
            console.log(count + " Even ");
            validation();
        } else if (count == 9) {
            clear();
        } else {
            boxes[i].firstElementChild.innerText = "O";
            data[i].style.textShadow =
                "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18";
            data[i].style.color = "#FFFFFF";
            turn.innerText = "X";
            console.log(count + " Odd ");
            validation();
        }
    });
}


function validation() {
    // ROW VALIDATION
    for (let i = 0; i <= 8; i = i + 3) {
        if (
            (data[i].innerText == "X" &&
                data[i + 1].innerText == "X" &&
                data[i + 2].innerText == "X") ||
            (data[i].innerText == "O" &&
                data[i + 1].innerText == "O" &&
                data[i + 2].innerText == "O")
        ) {

            // clear();
            upsideDownSpider.style.transform = "translateY(-30%)";
            // alert("Please Reset the Game ");
            winnerName.innerText = data[i].innerText;
            turn.innerText = "";
        }
        // LEFT DIAGONAL VALIDATION
        else if (i == 0) {
            if (
                (data[i].innerText == "X" &&
                    data[i + 4].innerText == "X" &&
                    data[i + 8].innerText == "X") ||
                (data[i].innerText == "O" &&
                    data[i + 4].innerText == "O" &&
                    data[i + 8].innerText == "O")
            ) {
                // alert(data[i].innerText + " is winner");
                // clear();
                upsideDownSpider.style.transform = "translateY(-30%)";
                winnerName.innerText = data[i].innerText;
                turn.innerText = "";
            }

        }


    }
    // COLUMN VALIDATION
    for (let i = 0; i <= 2; i++) {
        if (
            (data[i].innerText == "X" &&
                data[i + 3].innerText == "X" &&
                data[i + 6].innerText == "X") ||
            (data[i].innerText == "O" &&
                data[i + 3].innerText == "O" &&
                data[i + 6].innerText == "O")
        ) {
            // alert(data[i].innerText + " is winner");
            // clear();
            upsideDownSpider.style.transform = "translateY(-30%)";
            winnerName.innerText = data[i].innerText;
            turn.innerText = "";
        }
        // RIGHT DIAGONAL VALIDATION
        else if (i == 2) {
            if (
                (data[i].innerText == "X" &&
                    data[i + 2].innerText == "X" &&
                    data[i + 4].innerText == "X") ||
                (data[i].innerText == "O" &&
                    data[i + 2].innerText == "O" &&
                    data[i + 4].innerText == "O")
            ) {
                // alert(data[i].innerText + " is winner");
                // clear();
                upsideDownSpider.style.transform = "translateY(-30%)";
                winnerName.innerText = data[i].innerText;
                turn.innerText = "";
            }

        }
    }


}
function clear() {
    for (let j = 0; j < data.length; j++) {
        data[j].innerHTML = "";
    }


    count = 0;

}
clearbutton.addEventListener("click", function () {

    for (let j = 0; j < data.length; j++) {
        data[j].innerHTML = "";
    }
    count = 0;
    winnerName.innerText = "";
    turn.innerText = "";
    upsideDownSpider.style.transform = "translateY(-80%)";

});



// console.log();