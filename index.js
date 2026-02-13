let count = 0;
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {
    counter.textContent = count;

    // Keep color changes
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }

    // Hide + button at 10
    if (count === 10) {
        increaseBtn.style.display = "none";
    } else {
        increaseBtn.style.display = "inline-block";
    }
}

increaseBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});
