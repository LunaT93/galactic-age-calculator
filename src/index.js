import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Day from './js/date-checker.js';

function handleDateForm() {
  event.preventDefault();
  const date = new Date(document.getElementById("userDate").value); //initializes value to JS date object
  const dayOfWeek = new Day(date); //run date through date-checker
  const weekdays = dayOfWeek.getTheDay(); //get the day of the week
  const pTag = document.createElement("p");
  pTag.append(`The day of the week is: ${weekdays}.`);
  document.getElementById('printableArea').appendChild(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#date-form").addEventListener("submit", handleDateForm);
});