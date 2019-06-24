//get Dom element

const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//Option
const showAmPm = true;

// Show Time

function showTime() {
  let today = new Date();

  let hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM OR PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //Output time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

//add Zero to min and sec

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime();

//Set background and greeting

function setBackgroundGreeting() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('../img/morning.jpeg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundImage = "url('../img/evening.jpeg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

setBackgroundGreeting();

//getName

function getName() {
  if (!localStorage.getItem('name')) name.textContent = '[Enter Name]';
  else name.textContent = localStorage.getItem('name');
}

//set name
function setName(e) {
  if (e.type === 'keypress') {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

getName();

//get focus
function getFocus() {
  if (!localStorage.getItem('focus')) focus.textContent = '[Enter Focus]';
  else focus.textContent = localStorage.getItem('focus');
}

//set focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

getFocus();

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
