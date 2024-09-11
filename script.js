
// Updated list of phrases for the Bingo game with new words
const phrases = ['Democracy', 'Freedom', 'America', 'Election', 'Rights', 'Middle class', 'Security', 'Reproductive', 'Climate', 'Healthcare', 'Economy', 'Fraud', 'Fake', 'Unity', 'Justice', 'Patriot', 'Radical', 'Biden', 'Border', 'China', 'Prosperity', 'Innovation', 'Inclusion', 'Diplomacy', 'Equality', 'Education', 'Law', 'Jobs', 'Swamp', 'Tax', 'Military', 'Strong', 'Leadership', 'Constitution', 'Strength', 'Accountability', 'Progress', 'Resilience', 'Opportunity', 'Integrity', 'Infrastructure', 'Trust', 'Reform', 'Transparency', 'Liberty', 'Challenge', 'Fairness', 'People', 'Empowerment', 'Bold', 'Resolve', 'Influence', 'Family', 'Immigration', 'Energy', 'Crime', 'Allies', 'Victory', 'Strategy', 'Promise', 'Values', 'Future', 'Voting', 'Revolution', 'Action', 'Nation', 'Community', 'Safety', 'Voice', 'Responsibility', 'Growth', 'Global', 'Hope', 'Heritage', 'Honor', 'Determination', 'Change', 'Legacy', 'Truth', 'Faith', 'China', 'Russia', 'Putin', 'Xi', 'Abortion', 'Roe v Wade'];

// Generate a new bingo card
function generateCard() {
    const bingoCard = document.getElementById('bingoCard');
    bingoCard.innerHTML = ''; // Clear the card
    let selectedPhrases = getRandomUniquePhrases(25); // Get exactly 25 unique random phrases

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

// Helper function to get 25 unique random phrases
function getRandomUniquePhrases(num) {
    let shuffled = phrases.sort(() => 0.5 - Math.random());
    return Array.from(new Set(shuffled.slice(0, num))); // Ensure uniqueness by using a Set
}

// Generate an initial card when the page loads
window.onload = generateCard;
