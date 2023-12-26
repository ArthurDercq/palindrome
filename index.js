module.exports = Phrase;


// Reverses a string.
function reverse(string) {
  // return string.split("").reverse().join("");
  return Array.from(string).reverse().join("")
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}



// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Makes the phrase LOUDER.
  this.louder = function() {
    return content.toUpperCase();
  };

}

let phrase = new Phrase("Racecar");
console.log(phrase.palindrome());
console.log(phrase.louder());


// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }

}

TranslatedPhrase.prototype = new Phrase();

let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome());
