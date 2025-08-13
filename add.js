        const recoveryInput = document.getElementById("recoveryPhrase");
        const continueBtn = document.getElementById("continueBtn");
        const errorDiv = document.getElementById("recoveryError");

        // Listen for input changes
        recoveryInput.addEventListener("input", function () {
            const words = recoveryInput.value.trim().split(/\s+/);
            if (words.length >= 12) {
                continueBtn.disabled = false;
                errorDiv.textContent = ""; // Clear error message
            } else {
                continueBtn.disabled = true;
                errorDiv.textContent = "Separate each word with a space.";
                errorDiv.style.color = "red";
            }
        });