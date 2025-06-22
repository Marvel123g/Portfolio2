const contactBtns = document.querySelectorAll('#contact');

contactBtns.forEach(contactBtn => {
    contactBtn.addEventListener('click', () =>{
        console.log('clicked')
    })
})