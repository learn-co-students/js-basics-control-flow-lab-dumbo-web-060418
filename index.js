// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue <= 400) {
    result = "This one is on me!";
  } else if (someValue <= 2500) {
    result = "I will gladly take your thirty bucks."
  } else {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city) {
  var location = (city === 'NYC') ? `Ok, sounds good.` : 'No go.';
  return location;
}

function switchOnCharmFromTip(tip) {
  let bye;
  switch (tip) {
    case 'generous':
      bye = 'Thank you so much.';
      break;
    case 'not as generous':
      bye = 'Thank you.';
      break;

    default:
      bye = 'Bye.';
  }
  return bye;
}
