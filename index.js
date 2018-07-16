// Write your code in this file!

function scuberGreetingForFeet(distance) {
	let phrase;
	switch (true) {
	case distance <= 400:
		phrase = "This one is on me!";
		break;
	case distance <= 2500:
		phrase = 'I will gladly take your thirty bucks.';
		break;
	case distance > 2500:
		phrase = 'No can do.'
		break
	} 
	return phrase;
}

function ternaryCheckCity(city) {
	return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
	let phrase;
	switch(true) {
	case tip == 'generous' :
	phrase = "Thank you so much.";
	break;
	case tip == 'not as generous' :
	phrase = "Thank you."
	break;
	default:
	phrase = "Bye."
	}
	return phrase
}