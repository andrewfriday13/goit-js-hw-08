import throttle from 'lodash.throttle'
const feedBackForm = document.querySelector(".feedback-form")
const textarea = document.querySelector("textarea")
const input = document.querySelector("input")

const allData  = {}
const TEXTEAREA_KEY = "feedback-form-state"

feedBackForm.addEventListener('submit', submitForm)
textarea.addEventListener('input', throttle(textareaForm, 500))
input.addEventListener('input', throttle(textareaForm, 500))


feedBackForm.addEventListener('input', evnt => {

  allData[evnt.target.name] = evnt.target.value
}
)


function submitForm(evnt) { 

  const emailEl = evnt.target.email.value.length
  const messageEl = evnt.target.message.value.length
  evnt.preventDefault()

  if (emailEl == 0 || messageEl == 0) {

    return alert("Нічого не забув?")

  } else {
    const allFormData = evnt.currentTarget.elements;
    const email = allFormData.email.value;
    const message = allFormData.message.value

    const resultData = {
      email,
      message,
    }
    console.log(resultData)
  }
  evnt.target.reset()
      localStorage.removeItem(TEXTEAREA_KEY)


}

function textareaForm() {

  const feedBackMessage = JSON.stringify(allData)
 localStorage.setItem(TEXTEAREA_KEY, feedBackMessage)
}

function saveData() {
  const saveStorage = localStorage.getItem(TEXTEAREA_KEY)

  const translate = JSON.parse(saveStorage)    

  if (saveStorage) {
    textarea.value = translate.message
    input.value = translate.email
  }
} 

saveData()

