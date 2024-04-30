const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "You only live once, but if you do it right, once is enough. - Mae West"
  ];

  const quoteDisplay = document.getElementById('quote');
  const generateBtn = document.getElementById('btn-btn');

  generateBtn.addEventListener( 'click', () =>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  })