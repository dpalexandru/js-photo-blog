// recupero elementi DOM 
const cardContainer = document.getElementById('card-container');

//Constante link api 
const imgLink = 'https://lanciweb.github.io/demo/api/pictures/';


//Chiamata axios per ottenere dati img 
axios.get(imgLink).then(resp => {
    //recupero i dati 
    const immages = resp.data;

    //Ciclo immages per inserire i dati recuperati in card
    for (let i = 0; i < immages.length; i++) {

        //Destructuring a ogni ciclo
        const { title, url, date } = immages[i];

        cardContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">

                    <!--Card stile polaroid-->
                    <div class="card-polaroid">
                        <img id="card-img" src="${url}" alt="">
                        <div class="c-text mt-2">
                            <span id="data">${date}</span>
                            <h3 id="titolo-card">${title}</h3>
                        </div>
                        <div class="pin-container">
                            <img id="pin" src="./assets/img/pin.svg" alt="">
                        </div>
                    </div>
                </div>
        `
    }

    //recupero le card
    const cards = document.querySelectorAll('.card-polaroid');

    // Aggiungo event listner a Card che faccia comparire l'overlay al click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            //Recupero container overlay
            const overlayOn = document.getElementById('overlay');

            //Sostituisco la calsse 
            overlayOn.classList.remove('d-none');
            overlayOn.classList.add('d-block');
        });
    });
});