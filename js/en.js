document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");
    const valentineText = document.querySelector("h1");
    const gifBefore = document.getElementById("gifBefore");
    const gifAfter = document.getElementById("gifAfter");

    const questions = [
        "Are you sure?",
        "Are you tippity sure?",
        "Third times a charm?",
        "Can you please reconsider? :c",
        "You don't believe in multiple chances?",
        "You're being so cold right now...",
        "Maybe we can talk about it together?",
        "What about now?",
        "You're misclicking awfully a lot...",
        "Now's the right time?",
        "Give me a chance please?",
        "Pretty please?",
        "One last time, pretty pretty please?",
    ];

    let questionIndex = 0;
    let buttonSize = 30;
    let clickedNo = false; // Flag to track if "No" button has been clicked

    yesButton.addEventListener("click", function () {
        responseMessage.innerText = "Yippie! See you soon pookie... ^_^";
        yesButton.style.display = "none";
        noButton.style.display = "none";
        valentineText.style.display = "none";
        gifBefore.style.display = "none";
        gifAfter.style.display = "block";
    });

    noButton.addEventListener("click", function () {
        responseMessage.innerText = ""; // Clear the response message
        noButton.innerText = questions[questionIndex];
        questionIndex = (questionIndex + 1) % questions.length;

        if (clickedNo) {
            buttonSize += 35; // Increase linearly by 10 pixels
            noButton.style.width = buttonSize + "px";
            noButton.style.height = buttonSize + "px";

            // Calculate the new position to keep the button centered
            const offsetX = (buttonSize - 1000) / 2;
            noButton.style.transform = `translateX(-${offsetX}px)`;
        } else {
            clickedNo = true; // Set the flag to true after the first click
        }
    });
});
