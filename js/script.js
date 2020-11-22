
// Displays featured work in a rotating display

var slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
  showDivs(slideIndex += n)
}

function showDivs(n) {
  var i
  var x = document.getElementsByClassName("featuredwrapper")
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  x[slideIndex-1].style.display = "block"  
}

// Form handling

    // Handles to form elements
    const name = document.querySelector('#name')
    const name_error = document.querySelector('[data-name]')
    const email = document.querySelector('#email')
    const email_error = document.querySelector('[data-email]')
    const message = document.querySelector('#message')
    const message_error = document.querySelector('[data-message]')
    const submit = document.querySelector('#submit')
    const formMessage = document.querySelector('#formMessage')

    // Function to process form submission
    const processForm = (e) => {
        let fieldFocus = undefined
        submit.setAttribute('disabled', true)

        if (name.value.trim() == '') {
            name_error.classList.add('error')
            fieldFocus = name
        } else {
            name_error.classList.remove('error')
        }

        if (email.value.trim() == '') {
            email_error.classList.add('error')
            fieldFocus == undefined ? email : null
        } else {
            email_error.classList.remove('error')
        }

        if (message.value.trim() == '') {
            message_error.classList.add('error')
            fieldFocus == undefined ? message : null
        } else {
            message_error.classList.remove('error')
        }

        if (fieldFocus != undefined) {
            e.preventDefault()
            fieldFocus.focus()
        } else {
            formMessage.setAttribute('style', 'display: inline;')
            formMessage.innerText = 'Thank you, I will get back in the next two business days.'
        }
        submit.removeAttribute('disabled')
    }

    // Call the function
    formMessage.addEventListener('submit', (e) => {
        processForm(e)
    })