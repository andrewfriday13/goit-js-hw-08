import throttle from 'lodash.throttle'
const feedBackForm = document.querySelector(".feedback-form")
const textarea = document.querySelector("textarea")
const input = document.querySelector("input")

const allData  = {}
const TEXTEAREA_KEY = "feedback-form-state"

qwe()
feedBackForm.addEventListener('submit', submitForm)
textarea.addEventListener('input', throttle(textareaForm, 500))

feedBackForm.addEventListener('input', evnt => {

  allData[evnt.target.name] = evnt.target.value
  console.log(allData)
}
)


function submitForm(evnt) { 
  evnt.preventDefault()
  evnt.target.reset()
  localStorage.removeItem(TEXTEAREA_KEY)
}

function textareaForm() {

  const feedBackMessage = JSON.stringify(allData)
 localStorage.setItem(TEXTEAREA_KEY, feedBackMessage)
}

function qwe() {
  const saveStorage = localStorage.getItem(TEXTEAREA_KEY)

  const translate = JSON.parse(saveStorage)
  
  if (translate) {
    textarea.value = translate.message
    input.value = translate.email
  }
}


