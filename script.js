
// Full list of 100 phrases
const phrases = [
    "Make America Great Again", "Border Wall", "Fake News", "Witch Hunt", "Rigged Election",
    "I've Done More For...", "Tremendous", "Radical Left", "Law and Order", "Gas Prices",
    "Climate Crisis", "Equity", "Prosecutor", "Roe v. Wade", "Gun Control", 
    "We Must Fight", "Affordable Health Care", "Social Justice", "Voting Access", "Police Reform",
    "Proud Boys", "Hunter Biden", "Cancel Culture", "Energy Independence", "Border Czar",
    "Radical Democrats", "Unemployment Numbers", "Election Fraud", "Impeachment Hoax", "Deep State",
    "Obama", "Great Again", "Truth Social", "Build the Wall", "Crooked Hillary",
    "Strong Military", "Globalists", "Lock Her Up", "American Jobs", "Gas Prices",
    "Stand Back and Stand By", "Antifa", "Tax Cuts", "Trade Deals", "Hunter Biden Laptop",
    "Black Lives Matter", "Affordable Housing", "LGBTQ+ Rights", "Paid Family Leave", "Green Energy",
    "Income Inequality", "Public Safety", "Racial Equity", "Women's Rights", "Systemic Racism",
    "George Floyd", "Universal Background Checks", "Medicare for All", "Criminal Justice Reform", 
    "Affordable Health Care", "International Cooperation", "Multilateralism", "Diplomacy", 
    "Mental Health", "Childcare", "Criminal Justice", "Gender Pay Gap", "Voter Rights", 
    "Systemic Racism", "Vaccine", "Reproductive Rights", "Stand Back and Stand By", "Vaccine",
    "Greatest Economy", "Police Reform", "Income Inequality", "Diplomacy", "Health Care as a Right",
    "Build Back Better", "Science is Real", "Stand Back and Stand By", "George Floyd",
    "Hunter Biden Laptop", "Prosecutorial Discretion", "Mental Health", "Obama", "Income Inequality",
    "Gender Pay Gap", "Multilateralism", "Stand Back and Stand By", "Public Safety", "Affordable Housing",
    "Affordable Health Care", "Tremendous", "Criminal Justice", "Radical Left", "Fake News"
];

// Generate a new bingo card
function generateCard() {
    const bingoCard = document.getElementById('bingoCard');
    bingoCard.innerHTML = ''; // Clear the card
    let selectedPhrases = getRandomPhrases(25); // Get exactly 25 random phrases

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

// Helper function to get random phrases (limit to 25)
function getRandomPhrases(num) {
    let shuffled = phrases.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num); // Always return exactly 25 items
}

// Generate an initial card when the page loads
window.onload = generateCard;
