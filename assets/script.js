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
const bannerImage = document.querySelector('#banner > img');
const bannerText = document.querySelector('#banner > p');

// On crée une variable avec le nombre d'éléments du tableau slides
const numberOfSlide = slides.length;

let count = 0;

// Event au clic
arrowLeft.addEventListener('click', () => {
	console.log("Gauche");
});
arrowRight.addEventListener('click', () => {
	console.log("Droite");
	if (count == numberOfSlide - 1) {
		count = 0;
	} else {
		count++;
	}
	changeSlide();
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
		// condition pour ajouter la class dot_selected
		if (i == 0) { 
			dots.children[i].classList.add('dot_selected');
		}
	}
}
// on appelle la fonction
createBullet();

// Lier le bullet à une image 
function bulletSelected () {
	const dot = document.getElementsByClassName('dot');
	for (let i = 0; i < dot.length; i++) {
		dot[count].classList.remove('dot_selected');
	}
	dot[count].classList.add('dot_selected');
}

// Changer le contenu img et text de la bannière
function changeSlide() {
	bannerImage.src = `./assets/images/slideshow/${slides[count].image}`;
	bannerText.innerHTML = slides[count].tagLine;
	// on appelle la fonction pour changer de bullet au changement d'image
	bulletSelected();
}
changeSlide();