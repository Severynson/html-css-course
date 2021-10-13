const accordionItem = document.querySelector('.item');
const icon = document.querySelector('.icon');

var counter = 2;

const accordionOpenClose = () => {
    counter++;
    if (counter % 2) {
        accordionItem.classList.add('open')
        console.log('11')
    } else {
        accordionItem.classList.remove('open')
        console.log('22')
    }
    
}

icon.addEventListener('click', () => {accordionOpenClose(counter)} );

