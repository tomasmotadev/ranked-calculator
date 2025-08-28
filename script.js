// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

//
// Mobile Menu
//
// Menu mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Dropdown Photography
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';
  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});

// Dropdown Contact
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

mobileContactMenu.style.display = 'none';
mobileContactBtn.classList.remove('active');

mobileContactBtn.addEventListener('click', () => {
  const isOpen = mobileContactMenu.style.display === 'block';
  mobileContactMenu.style.display = isOpen ? 'none' : 'block';
  mobileContactBtn.classList.toggle('active', !isOpen);
});

// **Ranked Calculator Logic (JavaScript)**

// Equivalent to the calculate_rank function in Python
function calculateRank(wins, losses) {
    const balance = wins - losses;
    let rank;
    
    // The same ranking logic as your Python code.
    if (wins < 10) {
        rank = "Iron";
    } else if (wins >= 11 && wins <= 20) {
        rank = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        rank = "Silver";
    } else if (wins >= 51 && wins <= 80) {
        rank = "Gold";
    } else if (wins >= 81 && wins <= 90) {
        rank = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
        rank = "Legendary";
    } else { // wins >= 101
        rank = "Immortal";
    }
    
    return [balance, rank];
}

// Equivalent to the main function in Python
function main() {
    const winsInput = document.getElementById('wins').value;
    const lossesInput = document.getElementById('losses').value;
    const resultDiv = document.getElementById('result');
    
    const wins = parseInt(winsInput);
    const losses = parseInt(lossesInput);
    
    // Error handling as in your Python code
    if (isNaN(wins) || isNaN(losses)) {
        resultDiv.textContent = "Please enter valid integer numbers.";
        resultDiv.style.color = "var(--c-red)";
        return;
    }
    
    const [balance, rank] = calculateRank(wins, losses);
    
    resultDiv.textContent = `The Hero has a balance of ${balance} and is at the rank of ${rank}.`;
    resultDiv.style.color = "var(--c-blue)";
}
