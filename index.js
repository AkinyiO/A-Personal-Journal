document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector("#submitButton").addEventListener("submit",
  (e)=>{
    e.preventDefault(),
    console.log(e.target)
  })
});

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`)

//function addEntryToDom(event) {
  //event.preventDefault();
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

  const heading = document.createElement('h2');
  heading.className = `heading-results`;
  heading.textContent = `Journal Entries`;
  entryResultRow.insertAdjacentElement(`beforebegin`, heading);

  //adding Div
  const entryDiv = document.createElement(`div`);
  entryDiv.className = `single-entry-div`;
  entryResultRow.appendChild(entryDiv);

  //adding div element h3
  const entryHeading = document.createElement(`h3`);
  entryHeading.className = `single-entry-heading`;
  entryHeading.textContent = getEntryTitle[0].value;
  entryDiv.appendChild(entryHeading);

  //adding div element date
  const entryDate = document.createElement(`p`);
  entryDate.className = `single-entry-date`;

  if ((getEntryTitle[0].value = getEntryTitle[0].value)){
      entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
      entryDiv.appendChild(entryDate)
  }

    //adding Div element paragraph

    const entryParagraph = document.createElement(`p`);
    entryParagraph.className = `single-entry-text`;
    entryParagraph.textContext = getEntryText[0].value;
    entryDiv.appendChild(entryParagraph);
    getEntryText[0].value = ``;


function diaryData() {
  fetch("http://localhost:3000/diaryField")
  .then(res=> res.json())
  .then(data=> console.log(data))
}
diaryData()


entryForm.addEventListener("submit", ()=> {
  let title; 
   title.innerHTML = document.getElementById('entry-title').value
   heading.append(title)
})