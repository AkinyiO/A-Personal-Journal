// document.addEventListener('DOMContentLoaded', ()=>{
//   document.querySelector("#submitButton").addEventListener("submit",
//   (e)=>{
//     e.preventDefault(),
//     console.log(e.target)
//   })
// })

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`)

function addEntryToDom(event) {
  event.preventDefault();
  const d = new Date();
  const month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';


  const n = month[d.getMonth()];
  const day = d.getDay();
  const year = d.getFullYear();

}


