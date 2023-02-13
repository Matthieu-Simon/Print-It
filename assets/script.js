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
let i = 0;

// Event au clic
arrowLeft.addEventListener('click', () => {
	if (i == 0) {
		i = numberOfSlide - 1;
	} else {
		i--;
	}
	changeSlide();
});
arrowRight.addEventListener('click', () => {
	if (i == numberOfSlide - 1) {
		i = 0;
	} else {
		i++;
	}
	changeSlide();
});

// Fonction pour créer les bullets
const createBullet = () => {
	const dots = document.querySelector('.dots');
	// on boucle sur le tableau slides pour créer le nombre exact de bullets
	for (let j = 0; j < numberOfSlide; j++) {
		// on crée un élément span
		const dot = document.createElement('span');
		// on applique le style css "dot"
		dot.classList.add('dot');
		// on ajoute les éléments "dot" dans le parent dots
		dots.appendChild(dot);
		// condition pour ajouter la class dot_selected
		if (j == 0) { 
			dots.children[j].classList.add('dot_selected');
		}
	}
}
// on appelle la fonction
createBullet();

// Lier le bullet à une image 
const bulletSelected = () => {
	const dot = document.getElementsByClassName('dot');
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('dot_selected');
	}
	dot[i].classList.add('dot_selected');
}

// Changer le contenu img et text de la bannière
const changeSlide = () => {
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;
	// on appelle la fonction pour changer de bullet au changement d'image
	bulletSelected();
}
changeSlide();