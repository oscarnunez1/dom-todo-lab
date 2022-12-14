/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const inpEl = document.getElementById("value")
const btnEl = document.getElementById("submit-button")
let ulEl = document.getElementById("todo-list")
const resetBtnEl = document.getElementById("reset-button")



/*----------------------------- Event Listeners -----------------------------*/

btnEl.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    const inpEl = document.querySelector('input')
    li.textContent = inpEl.value
    let ulEl = document.querySelector('ul')
    ulEl.appendChild(li)
    inpEl.value = ""
})

resetBtnEl.addEventListener("click", function() {
    ulEl.innerHTML = ""
})

/*-------------------------------- Functions --------------------------------*/
