// recupero elementi DOM 
const cardContainer = document.getElementById('card-container');
const cardImg = document.getElementById('card-img');
const cardData = document.getElementById('data');
const cardTitle = document.getElementById('titolo-card');

//Constante link api 
const imgLink = 'https://lanciweb.github.io/demo/api/pictures/';


//Chiamata axios per ottenere dati img 

axios.get(imgLink).then(resp => {
    console.log(resp.data);
});