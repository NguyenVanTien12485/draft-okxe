let getMenu = document.querySelector('#menu')
let getMenuBtn = document.querySelector('#menu-btn')

getMenuBtn.addEventListener('click', function() {
    getMenu.classList.toggle('invisible')
})