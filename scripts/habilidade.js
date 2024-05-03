document.addEventListener("DOMContentLoaded", function () {
    let sparkleCount = 200; // Change number of sparkles
    let baseSize = 5; // Change base size of sparkles
    const maxSparkleCount = 500; // Maximum custom number of sparkles set to prevent weirdness
    const container = document.querySelector(".sparkle-container");

    function generateSparkles() {
        // Clear existing sparkles
        container.innerHTML = "";

        // Limit sparkle count to maximum custom value
        const actualSparkleCount = Math.min(sparkleCount, maxSparkleCount);

        // Generate new sparkles
        for (let i = 0; i < actualSparkleCount; i++) {
            const sparkle = document.createElement("div");
            sparkle.classList.add("sparkle");
            container.appendChild(sparkle);

            // Randomize sparkle properties
            const size = Math.random() * baseSize + 1; // Random size based on baseSize
            const left = Math.random() * 100 + "%"; // Random horizontal position
            const top = Math.random() * 100 + "%"; // Random vertical position
            const duration = Math.random() * 3 + 2; // Random animation duration between 2 and 5 seconds
            const delay = Math.random() * 3; // Random delay before animation starts

            // Apply sparkle styles
            sparkle.style.width = size + "px";
            sparkle.style.height = size + "px";
            sparkle.style.left = left;
            sparkle.style.top = top;
            sparkle.style.animationDuration = duration + "s";
            sparkle.style.animationDelay = delay + "s";

            // Fade sparkle to 0 opacity at the end of animation
            sparkle.addEventListener("animationiteration", function () {
                sparkle.style.opacity = 0;
            });
        }
    }

    // Initial generation of sparkles
    generateSparkles();

    // Function to change sparkle count
    function changeSparkleCount(count) {
        sparkleCount = count;
        generateSparkles();
    }

    // Example: Change sparkle count to 100
    // changeSparkleCount(100);

    // Function to change base sparkle size
    function changeBaseSize(size) {
        baseSize = size;
        generateSparkles();
    }

    // Example: Change base sparkle size to 6
    // changeBaseSize(6);

    // Blinking animation
    function blinkSparkles() {
        const sparkles = document.querySelectorAll(".sparkle");
        sparkles.forEach(function (sparkle) {
            sparkle.style.opacity = Math.random(); // Random opacity between 0 and 1
        });
    }

    // Start blinking interval
    setInterval(blinkSparkles, 500); // Adjust blinking frequency as needed
});