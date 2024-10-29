function goToEnvelopePage() {
    document.getElementById('landing').classList.add('hidden');  // Hide landing page
    document.getElementById('envelopePage').classList.remove('hidden');  // Show envelope page

    // After a short delay, fade to the hearts page
    setTimeout(() => {
        document.getElementById('envelopePage').classList.add('hidden');  // Hide envelope page
        document.getElementById('heartsPage').classList.remove('hidden');  // Show hearts page
        playSong();  // Play the song
    }, 2000); // Stay on the envelope page for 2000 milliseconds (2 seconds)
}

function playSong() {
    const song = document.getElementById('birthdaySong');
    song.play();
}
// Multiple-choice question logic
    const options = document.querySelectorAll('.option');
    const message = document.getElementById('message');

    // Correct answer ID (modify if needed)
    const correctAnswerId = "none";

    options.forEach(option => {
        option.addEventListener('click', () => {
            if (option.id === correctAnswerId) {
                option.style.backgroundColor = "#ddffdd"; // Green for correct answer
            } else {
                option.classList.add("wrong"); // Red for incorrect
                showTypingEffect("Bigger than the earth, solar system, galaxy and universe combined");
            }
        });
    });

    function showTypingEffect(text) {
        message.textContent = ""; // Clear previous message
        message.style.width = "auto"; // Expand for typing

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                message.textContent += text[i];
                i++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => { // Collapse message after display
                    message.style.width = "0";
                }, 2000);
            }
        }, 100);
    }
