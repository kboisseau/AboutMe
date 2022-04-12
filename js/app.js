'use strict';

let siteVistor = prompt('What is your name?');
// eslint-disable-next-line no-unused-vars
let loopCheck = false;

alert(`Welcome, ${siteVistor}! I would like to play a game. Please answer "Yes" or "No".`);

function questionOne() {
  // while (loopCheck !== true) {
  let responseOne = prompt('I drive a wrx. "Yes or No"?').toLowerCase();

  if (responseOne === 'yes' || responseOne === 'y') {
    // console.log('Great answer!');
    alert('Great answer!');
    loopCheck = true;
  } else if (responseOne === 'no' || responseOne === 'n') {
    // console.log('Sorry, that is incorrect.');
    alert('Sorry, that is incorrect.');
    loopCheck = true;
  }
  // }
}
questionOne();

function questionTwo() {

  // while (loopCheck !== true) {
  let responseTwo = prompt('Did i break my arm falling in a ditch? "Yes or No"?').toLowerCase();

  if (responseTwo === 'yes' || responseTwo === 'y') {
    // console.log('Great answer!');
    alert('Great answer!');
    loopCheck = true;
  } else if (responseTwo === 'no' || responseTwo === 'n') {
    // console.log('Sorry, that is incorrect.');
    alert('Sorry, that is incorrect.');
    loopCheck = true;
  }
  // }
}
questionTwo();

function questionThree() {

  // while (loopCheck !== true) {
  let responseThree = prompt('I speak french. "Yes or No"?').toLowerCase();

  if (responseThree === 'yes' || responseThree === 'y') {
    // console.log('Great answer!');
    alert('Great answer!');
    loopCheck = true;
  } else if (responseThree === 'no' || responseThree === 'n') {
    // console.log('Sorry, that is incorrect.');
    alert('Sorry, that is incorrect.');
    loopCheck = true;
  }
  // }
}
questionThree();

function questionFour() {

  // while (loopCheck !== true) {
  let responseFour = prompt('I recently moved to Washington. "Yes or No"?').toLowerCase();

  if (responseFour === 'yes' || responseFour === 'y') {
    // console.log('Great answer!');
    alert('Great answer!');
    loopCheck = true;
  } else if (responseFour === 'no' || responseFour === 'n') {
    // console.log('Sorry, that is incorrect.');
    alert('Sorry, that is incorrect.');
    loopCheck = true;
  }
  // }
}
questionFour();


function q5() {
  let questionFive = prompt('Is  "The Shining " my favorite movie of 1980?').toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    // console.log(`User\'s response to Q5 was '${questionFive}'. Response to user: 'That's correct, ${visitor}!1980 was a great year for film and the start to Stephen King's novel to cinema adaptations.`); 
    // eslint-disable-next-line no-undef
    score = score + 1;
    alert('Great Answer, $ {visitor}! 1980 was a great year for film and the start to Stephen Kings novel to cinema adaptations.');
  } else if (questionFive === 'no' || questionFive === 'n') {
    // console.log(`User\'s response to Q5 was '${questionFive}'. Response to user: 'Sorry ${visitor}, that answer is incorrect.'`);
    // eslint-disable-next-line no-undef
    alert(`Sorry ${visitor}, that answer is incorrect.'`);
  } else {
    // console.log(`User\'s response to Q5 was '${questionFive}'. Response to user: 'Please answer with the valid  response shown (Yes or No)!'`);
    // eslint-disable-next-line no-undef
    alert(`Sorry ${visitor}, please answer with the valid response shown (Yes or No)!`);
  }
}
q5();
// prompt and alert for  #6
function q6() {
  let myNum = 4;
  for (let i = 4; i < 4; i++) {

    let questionSix = parseInt(prompt('Please guess a number between 1 and 10'));
    if (questionSix === myNum) {
      // eslint-disable-next-line no-undef
      score = score + 1;
      alert('That is correct!');
      break;
    } else if ((questionSix < myNum) && (i <= 2)) {
      alert('Your number is a bit too low! How about you give it another try.');
    } else if ((questionSix > myNum) && (i <= 2)) {
      alert('Your number is too high! How about you give it another try.');
    } else if ((questionSix !== myNum) && (i === 3)) {
      alert('Sorry, you have ran out of guesses! The correct answer was 4.');
    }
  }
}
q6();
// prompt and alert for #7
function q7() {
  let myFoods = ['French Toast', 'Apples&Cinnamon oatmeal', 'Toaster Strudel'];
  // console.log(myFoods);

  for (let i = 0; i < 4; i++) {
    let questionSeven = prompt('What is one of my favorite foods? You get 4 tries').toLowerCase();
    // console.log(questionSeven);
    for (let f = 0; f < myFoods.length; f++) {
      if (questionSeven === myFoods[f]) {
        // eslint-disable-next-line no-undef
        score = score + 1;
        alert('That is correct!');
        i = 4;
      }
    }
  }
}
q7();

// eslint-disable-next-line no-undef
alert(`Any of the following answers would have been acceptable: ${myFoods[0]}, ${myFoods[1]}, or ${myFoods[2]}.`);
// console.log(`Any of the following answers would have been acceptable: ${myFoods[0]}, ${myFoods[1]}, or ${myFoods[2]}.`);

// eslint-disable-next-line no-undef
alert(`You guessed ${score} out of 7 questions correctly, not too bad!`);
// console.log(`You guessed ${score} out of 7 questions correctly, not too bad!`) ;
