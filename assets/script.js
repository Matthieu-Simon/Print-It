const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Les variables qui ciblent les différents éléments du DOM
const banner = document.getElementById('#banner');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// On compte le nombre d'éléments du tableau slides
const numberOfSlide = slides.length;

let count = 0;

// Event au clic
arrowLeft.addEventListener('click', () => {
	console.log("Gauche");
});
arrowRight.addEventListener('click', () => {
	console.log("Droite");
});

// Fonction pour créer les bullets
function createBullet() {
	const dots = document.querySelector('.dots');
	// on boucle sur le tableau slides pour créer le nombre exact de bullets
	for (let i = 0; i < numberOfSlide; i++) {
		// on crée un élément span
		const dot = document.createElement('span');
		// on applique le style css "dot"
		dot.classList.add('dot');
		// on ajoute les éléments "dot" dans le parent dots
		dots.appendChild(dot);
	}
}
// on appelle la fonction
createBullet();
