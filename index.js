let count = 0;
const MAX_LIMIT = 10;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

increaseBtn.addEventListener("click", () => {
    if (count < MAX_LIMIT) {
        count++;
        updateCounter();

        if (count === MAX_LIMIT) {
            alert("Maximum limit reached!");
        }
    }
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});
