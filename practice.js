const $= document;


let Enterbtn = $.querySelector('.enter-btn')
let MainSection =$.querySelector('.mainSection')
let Notepad =$.querySelector('.notepad')

console.log(Enterbtn);

Enterbtn.addEventListener('click' ,function () {
    MainSection.style.display= 'none'
    Notepad.style.display = "flex"
})
