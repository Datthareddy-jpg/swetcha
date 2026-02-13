let count = 0;
const MAX_LIMIT = 10;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {
    counter.textContent = count;

    // Change color
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }

    // Disable + button at limit
    if (count >= MAX_LIMIT) {
        increaseBtn.disabled = true;
    } else {
        increaseBtn.disabled = false;
    }
}

increaseBtn.addEventListener("click", () => {
    if (count < MAX_LIMIT) {
        count++;
        updateCounter();
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

