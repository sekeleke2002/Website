
document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.getElementById("countdown");
    const matchTime = new Date("2025-06-01T18:00:00Z").getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = matchTime - now;
        if (distance < 0) {
            countdown.innerHTML = "Kickoff!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until next match!`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
