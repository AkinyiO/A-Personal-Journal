document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector("#submitButton").addEventListener("submit",
  (e)=>{
    e.preventDefault(),
    console.log(e.target)
  })
})

const entryForm = document.querySelector('#entryForm');
const entryResultsSection = document.querySelector('#entryResultsSection');
const entryResultItem = document.querySelector('.entryResultItem')
