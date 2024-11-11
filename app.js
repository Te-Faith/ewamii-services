

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



// Get all elements with the class 'callToOrder'
const orderButtons = document.getElementsByClassName('callToOrder');

// Loop through each button and add a click event listener
Array.from(orderButtons).forEach(button => {
    button.addEventListener('click', function(event) {
        // Find the container element
        const container = event.target.closest('.container');

        // Get product name and price
        const productName = container.querySelector('.productName').innerText;
        const productPrice = container.querySelector('.productPrice').innerText;

        // Log product name and price
        console.log('Product Name:', productName);
        console.log('Product Price:', productPrice);

        const message = `I would like to order: ${productName} for ${productPrice}`;
        const encodedMessage = encodeURIComponent(message);

        const whatsappLink = `https://wa.link/ud1vaf?text=${encodedMessage}`;
       window.location.href = whatsappLink;
    });
});






// function redirectToWhatsApp() {
//     const productPrice = document.getElementById('.productPrice').innerText;
//     const productName = document.getElementById('productname').innerText;
//     const productName = document.querySelector('.productName').innerText;
//     const productPrice = document.querySelector('.productPrice').innerText;
    
//     const message = `I would like to order: ${productName} for ${productPrice}`;
//     const encodedMessage = encodeURIComponent(message);
    
//     const whatsappLink = `https://wa.link/ud1vaf?text=${encodedMessage}`;
//     window.location.href = whatsappLink;
// }

// const productName = document.getElementById('productname').innerText;
// console.log(productName);
