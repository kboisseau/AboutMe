'use strict';

let siteVistor = prompt('What is your name?');
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




