document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector("#submitButton").addEventListener("submit",
  (e)=>{
    e.preventDefault(),
    console.log(e.target)
  })
})
