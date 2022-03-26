
function emoji() {
    
    let field = document.body.querySelector('#emoji');
    let cards = field.querySelectorAll("li");

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.target.classList.toggle('turned');
        });
    });
}

emoji();