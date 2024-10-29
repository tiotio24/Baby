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
