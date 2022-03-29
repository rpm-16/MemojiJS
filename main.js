class Memoji {
    
    constructor(gameObj) {
        this.fieldId = gameObj.fieldId;
        this.fieldTimer = gameObj.fieldTimer;
        this.gameTime = gameObj.gameTime;
        this.gameField = document.body.querySelector('#'+ this.fieldId);
        this.pictures = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻','🐶', '🐱', '🐭', '🐹', '🐰', '🐻'];
        this.pictures.sort(() => Math.random()-0.5);
        this.createGame();
    }

    // заполняем карточки картинками и вешаем слушалку событий
    createGame(){
//таймер
        //отобразим таймер 
        //document.body.querySelector('.' + this.fieldTimer).innerHTML = this.gameTime;

        //запускаем таймер при клике по полю
        this.gameField.addEventListener('click', (event) => {
            //event.preventDefault();
            //this.showTimer();            
        })


//карточки
        let cards = this.gameField.querySelectorAll("li");
        let i = 0;
        cards.forEach(card => {
            card.innerHTML = '<span>' + this.pictures[i] + '</span>';
            i++;
            card.setAttribute('data-num', i);
            card.addEventListener('click', (event) => {
                event.preventDefault();
                this.turnCard(card);
            });
        });
    }


    //переворот карточек
    turnCard (card) {
        let openCards;

        //perevorot
        if (card.classList.contains('turned')){
            card.classList.remove('turned');
            openCards = null;

        } else {            
            //проверка на совпадения 
            card.classList.add('turned');

            if (this.gameField.querySelectorAll('.turned').length >= 2){ 
                openCards = Array.from(this.gameField.querySelectorAll('.turned'));
                if(openCards[0].dataset.num != openCards[1].dataset.num &&
                    openCards[0].innerHTML == openCards[1].innerHTML) {
                        this.gameField.querySelectorAll('.turned').forEach(card=>{
                            card.classList.remove('turned');
                            setTimeout(()=>{card.classList.add('sovpali');}, 200);  
                        })

                        openCards = null;
                }
                else {
                    this.gameField.querySelectorAll('.turned').forEach(card=>{
                    setTimeout(()=>{card.classList.add('nesovpali');}, 200);
                    setTimeout(()=>{card.classList.remove('nesovpali');}, 400);
                    setTimeout(()=>{card.classList.remove('turned');}, 400);
                    openCards = null;
                    })
                }

            } 

        }
    }

    // таймер
    showTimer(){

        this.gameField.removeEventListener('click', (event) => {
            event.preventDefault();
            this.showTimer();            
        })

        setInterval(() => {
            document.body.querySelector('.' + this.fieldTimer).innerHTML = this.gameTime;
            this.gameTime--;

            if (this.gameTime == 0) {
                alert('lose');
            }
            if (this.gameField.querySelectorAll('.turned')== 0){
                alert('win');
            }
 
        }, 1000);

    }

}

