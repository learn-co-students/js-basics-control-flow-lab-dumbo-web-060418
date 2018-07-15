// Write your code in this file!
function scuberGreetingForFeet(number){
  let response 
  if (number <= 400){
  response = "This one is on me!"
  }
  else if (number <= 2500 ){
  response = "I will gladly take your thirty bucks."
  }
  else {
  response = "No can do."
  }
  return response
}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
  case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.'
  }
}