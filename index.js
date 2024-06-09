// declare const  tutorials = data

// declare titlecased as const titleCased = () => { tutorials as data}

// input something into data like words and index
  // declare each sentences/array in to a variable
  // iterate through each word
  // update the first letter of each word to be capitalize

// string.prototype.split() src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//ex: let sent = "these are just some words on paper"
//    sent.split(' ').map ( ([h, ...t]) => h.toUpperCase() + t.join('').toLowerCase() )

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased () {
  return tutorials.map((title) => {
    return title.split(' ').map( ([firstLetter, ...otherLetters]) => {
      return [firstLetter.toUpperCase() + otherLetters.join('')];
    }).join(' ');
  });
};

