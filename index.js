document.addEventListener("DOMContentLoaded", () => {
    let count = 0;

    const counter = document.getElementById("counter");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const resetBtn = document.getElementById("reset");

    function updateCounter() {
        counter.textContent = count;

        // Color logic
        if (count > 0) {
            counter.style.color = "green";
        } else if (count < 0) {
            counter.style.color = "red";
        } else {
            counter.style.color = "black";
        }

        // Hide + button at 10
        if (count >= 10) {
            increaseBtn.style.display = "none";
        } else {
            increaseBtn.style.display = "inline-block";
        }
    }

    // Call once at start
    updateCounter();

    increaseBtn.addEventListener("click", function () {
        count++;
        updateCounter();
    });

    decreaseBtn.addEventListener("click", function () {
        count--;
        updateCounter();
    });

    resetBtn.addEventListener("click", function () {
        count = 0;
        updateCounter();
    });
});

