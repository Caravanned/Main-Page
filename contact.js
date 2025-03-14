document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        let errorMessage = "ssss";

        // Validate Name (At least 3 characters)
        if (nameInput.value.trim().length < 3) {
            errorMessage += "⚠️ Name must be at least 3 characters long.\n";
        }

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            errorMessage += "⚠️ Please enter a valid email.\n";
        }

        // Validate Message (Should not be empty)
        if (messageInput.value.trim() === "") {
            errorMessage += "⚠️ Message cannot be empty.\n";
        }

        if (errorMessage) {
            feedback.innerText = errorMessage;
            feedback.style.display = "block";
            feedback.style.color = "red"; // Ensure error message is red
        } else {
            feedback.style.display = "none";
            alert("✅ Thank you! Your message has been sent successfully.");
            form.reset();
        }
    });

    // Function to validate email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});