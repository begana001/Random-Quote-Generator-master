//a variation for quotes and sourse. array + object 
//each object has quote, source at least and some citation and year
//but the citation and year informations are fake.!!
var quotes = [
  {quote: "Common sense is the collection of prejudices acquired by age 18.",
  source: "- Albert Einstein"},
  {quote: "Love does not consist in gazing at each other, but in looking together in the same direction.",
  source: "- Antoine de Saquote:int-Exupery"},
  {quote: "Maybe this world is another planet's hell.", 
  source: "Aldous Huxley",
  citation:"Public",
  year:"2016"},
  {quote: "Forgive your enemies but never forget their names.",
  source: "John F. Kennedy"},
  {quote: "True friends stab you in the front.",
  source: "Oscar wilde",
  citation:"facebook",
  year: "2019"}
];



//function that gererate random quote. 
//think about random number generator! 
function getRandomQuote() {
 var random = Math.floor( Math.random () * quotes.length );
  var printRandom = quotes[random]; 
 return printRandom;
}




//another function for way of print random quotes generator.
//using getRandomQuote function and if statement
//so if the object has citation or year property, it shows up on web.
//connect div in html file classed "quote-box"
function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class = "quote">' + randomQuote.quote + '</p>'
  html += '<p calss = "source">' + randomQuote.source;
    if ( randomQuote.citation ){
     html += '<span class = "citation">' + randomQuote.citation + '</span>'
    };
    if ( randomQuote.year ){
     html += '<span class = "year">' + randomQuote.year + '</span>'
    };
    html += '</P>';
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);