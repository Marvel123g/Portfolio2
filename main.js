const contactBtns = document.querySelectorAll("#contact-toggle");
const contactInfo = document.querySelector('.contact-info')

contactBtns.forEach(contactBtn => {
    contactBtn.addEventListener('click', () => {
       contactInfo.classList.toggle('hidden')
    })
})