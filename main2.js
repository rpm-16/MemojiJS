// class RpmEmoji{
//     constructor() {
//         this.gameField = document.body.querySelector('#emoji');
//         this.cards = field.querySelectorAll("li");
//         this.pictures = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻','🐶', '🐱', '🐭', '🐹', '🐰', '🐻'];

//     }

//     createGame() {
//         pictures.sort(() => Math.random()-0.5);   
//     }
// }

// new RpmEmoji();


function emoji() {
    let field = document.body.querySelector('#emoji');
    let cards = field.querySelectorAll("li");
    let pictures = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻','🐶', '🐱', '🐭', '🐹', '🐰', '🐻'];
    pictures.sort(() => Math.random()-0.5);
    let i = 0;




    cards.forEach(card => {
        card.innerHTML = '<span>' + pictures[i] + '</span>';
        i++;

        card.addEventListener('click', (event) => {
            event.preventDefault();

            //perevorot
            if (card.classList.contains('turned')){
                card.classList.remove('turned');
            } else {            
                card.classList.add('turned');
            }

            //scritie
            let openCards = Array.from(field.querySelectorAll('turned'));

            if (openCards.length >= 2){
                alert(openCards.length);
                if (openCards[0].innerHTML == openCards[1].innerHTML) {
                    alert(openCards);
                } else {
                    alert('ne bingo');
                }
            }


        });
    });


}

emoji();