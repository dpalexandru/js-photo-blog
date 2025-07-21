// recupero elementi DOM 
const cardContainer = document.getElementById('card-container');

//Constante link api 
const imgLink = 'https://lanciweb.github.io/demo/api/pictures/';


//Chiamata axios per ottenere dati img 

axios.get(imgLink).then(resp => {
    //recupero i dati 
    const immages = resp.data;

    //Ciclo per inserire i dati recuperati in card
    for (i = 0; i < immages.length; i++) {
        //Destructuring a ogni ciclo

        const { title, url, date } = immages[i];

        cardContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">

                    <!--Card stile polaroid-->
                    <div class="card-polaroid">
                        <img id="card-img" src="https://i1.sndcdn.com/artworks-v9HOpFB6xe6LV3H3-nkTBBg-t500x500.png" alt="">
                        <div class="c-text mt-2">
                            <span id="data">10-01-1991</span>
                            <h3 id="titolo-card">Titolo</h3>
                        </div>
                        <div class="pin-container">
                            <img id="pin" src="./assets/img/pin.svg" alt="">
                        </div>
                    </div>
                </div>
        `
    }

});