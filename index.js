// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let message;
  if(distance <= 400){
    message = "This one is on me!";
  } else if(distance > 2500){
    message = "No can do.";
  } else if(distance > 2000){
    message = "I will gladly take your thirty bucks.";
  }
  return message;
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let charm;
  
  switch(tip){
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
      charm = "Thank you.";
      break;
    default:
      charm = "Bye."
  }
  return charm;
}
