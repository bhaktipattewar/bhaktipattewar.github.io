const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Don't let yesterday take up too much of today. – Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
    "Success is not in what you have, but who you are. – Bo Bennett"
  ];

  const quoteText = document.getElementById('quote-text');
  const newQuoteBtn = document.getElementById('new-quote');

  newQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });