/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the
// largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number1, number2){
    "use strict";

    if(number1 > number2){
      return number1;
    } else{
      return number2;
    }
    //...
}
console.assert(max(10, 20) == 20);



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and
// returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3){
    "use strict";
    var maxNum = 0;

    if(number1 > number2 > number3){
      maxNum = number1;
    } else if (number2 > number3 > number1){
      maxNum = number2;
    } else{
        maxNum = number3;
      }

    //console.log(maxNum);
    return maxNum;
    //...
}

console.assert(maxOfThree(10, 20, 30) == 30);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {

      return true;
    } else {
      return false;
    }

    //...
}

console.assert(isVowel('a') == true);

// console.assert(isvowel(i));

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var newValue = '';
    //var newString = [];

    for(var i = 0; i<phrase.length; i++){
      var char = phrase[i];

      if(isVowel(char) || char == ' ') {
        newValue += char;
      } else{
        newValue += char + 'o' + char;
        }

      }

      //console.log(newValue);
      return newValue;

  }


console.assert(rovarspraket('two words') == 'totwowo woworordodsos');

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4])
// should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbersToAdd){
    "use strict";

    var sum = 0;

    for(var i = 0; i<numbersToAdd.length; i++){
     sum += numbersToAdd[i];
    }

    return sum;
    //...
}

console.assert(sum([1, 2, 3, 4]) == 10);

function multiply(numbersToMult){
    "use strict";


    var product = 1;

    for(var i = 0; i<numbersToMult.length; i++){
      product = product * numbersToMult[i];
    }

    return product;
    //...
}

console.assert(multiply([1, 2, 3, 4]) == 24);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example,
// reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";

    var reverseString;

    reverseString = string.split('').reverse().join('');

    //console.log(reverseString);

    return reverseString;



    //...
}

console.assert(reverse('I love to eat pizza') == 'azzip tae ot evol I');

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns
// the length of the longest one.
// ---------------------

function findLongestWord(str){
    "use strict";
    var longest = [];
    var words = str.split(" ");

    for(var i = 0; i < words.length; i++) {
      if(words[i].length > longest.length) {
        longest = words[i];
      }
    }

    //console.log(longest.length);
    return longest.length;
    //...
}

console.assert(findLongestWord('hello goodbye you us') == 7);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer
// i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, size){
    "use strict";
    var newArray = [];
    for(var i = 0; i < words.length; i++){
      if(words[i].length>size){
        newArray[newArray.length] = words[i];


      }
    }
    //console.log(newArray);
    // return newArray
    //...
}

filterLongWords(['How', 'many', 'times', 'am', 'I', 'typing', 'words'], 4);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing
// of the characters contained in it. Represent the frequency listing as a
// Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

 function charFreq(string){
     "use strict";
    var letters = string.split('');
    var letterA = 0;
    var letterB = 0;
    var letterC = 0;
    var letterD = 0;

    for(var i = 0; i < letters.length; i++){
      if(letters[i] == 'a') {
        letterA += 1;
      } else if(letters[i] == 'b') {
        letterB += 1;
      } else if(letters[i] == 'c'){
        letterC += 1;
      } else {
        letterD += 1;
      }

    }

    console.log(letterA, letterB, letterC, letterD);


    return letterA, letterB, letterC, letterD;
    //...


}
charFreq('abbabcbdbabdbdbabababcbcbab');
