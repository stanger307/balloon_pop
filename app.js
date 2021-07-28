const ballonE = document.querySelector(".balloon");
ballonE.addEventListener("click", () => activate(30,100));
let pop = new Audio('./comedy_pop_finger_in_mouth_001.mp3');

function activate(size, target) {
    let detonate = setInterval(() => {
        if (size >= target) {   
            clearInterval(detonate);
            setTimeout(() => ballonE.innerHTML = "💢", 10);
            setTimeout(() => ballonE.classList.add("pop"), 100);
            pop.play();
        } else {
            size++;
            ballonE.style.fontSize = size + "px";
        }
    }, 1);
}
