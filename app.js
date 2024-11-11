

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



function redirectToWhatsApp() {
    // Get product name and price
    const productName = document.querySelector('.productName').innerText;
    const productPrice = document.querySelector('.productPrice').innerText;

    // Encode message to include in WhatsApp link
    const message = `I would like to order: ${productName} for ${productPrice}`;
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp with message
    const whatsappLink = `https://wa.link/ud1vaf?text=${encodedMessage}`;
    window.location.href = whatsappLink;
}