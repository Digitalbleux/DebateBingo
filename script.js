
// Repository of phrases
const phrases = [
    "Make America Great Again", "Border Wall", "Fake News", "Witch Hunt", "Rigged Election",
    "I've Done More For...", "Tremendous", "Radical Left", "Law and Order", "Gas Prices",
    "Climate Crisis", "Equity", "Prosecutor", "Roe v. Wade", "Gun Control", 
    "We Must Fight", "Affordable Health Care", "Social Justice", "Voting Access", "Police Reform"
    // Add more as needed...
];

// Generate a new bingo card
function generateCard() {
    const bingoCard = document.getElementById('bingoCard');
    bingoCard.innerHTML = ''; // Clear the card
    let selectedPhrases = getRandomPhrases(25); // Get 25 random phrases

    selectedPhrases.forEach((phrase, index) => {
        let cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.textContent = phrase;

        // Toggle active class on click
        cell.addEventListener('click', function() {
            cell.classList.toggle('active');
        });

        bingoCard.appendChild(cell);
    });
}

// Clear the bingo card
function clearCard() {
    document.querySelectorAll('.bingo-cell').forEach(cell => {
        cell.classList.remove('active');
    });
}

// Helper function to get random phrases
function getRandomPhrases(num) {
    let shuffled = phrases.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Generate an initial card when the page loads
window.onload = generateCard;
