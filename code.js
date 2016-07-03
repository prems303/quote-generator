$(document).ready(function() {
  $('#button').click(function() {
  $('#quotes').text(quotes[getQuote()]);
  });
});

var quotes = ["There is no hurry to find out where you should be.... you're never meant to be in only one place... you are always moving forward... life is a road with no parking spots.",
"Freedom is being you without caring what others think.",
"If you are making mistakes it means you are out there doing something.",
"Obstacles in your way are only opportunites still hidden as potential.",
"Innocence is thought charming because it offers delightful possibilities for exploitation.", 
"Every day begins with an act of courage and hope; getting out of bed.", 
"Hatred observes with more care than love does.", 
"To understand someone, find out how he spends his money.", 
"The educated do not share a common body of information, but a common state of mind."];

function getQuote() {
  return Math.floor(Math.random() * quotes.length);
}
