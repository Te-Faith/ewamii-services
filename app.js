

let openBox = document.getElementById('openBox')
let opening = document.getElementById('open')
let closing = document.getElementById('close')
let others = document.getElementById('others')

openBox.addEventListener('click', () => {    
    if(others.style.display == 'none'){
        others.style.display = 'flex'
        opening.style.display = 'none'
    }
})
closing.addEventListener('click', () => {
    if(others.style.display == 'flex'){
        others.style.display = 'none'
        opening.style.display = 'flex'
    }
})