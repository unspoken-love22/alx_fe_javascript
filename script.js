// script.js

// Initialize an array to store quotes
let quotes = [
  { text: "The best way to predict the future is to invent it.", category: "Inspirational" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
  // Add more quotes as needed
];

// Function to show a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.textContent = `"${quote.text}" - ${quote.category}`;
}

// Event listener for "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    alert('Quote added successfully!');
    
    // Clear input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
  } else {
    alert('Please enter both quote text and category.');
  }
}
