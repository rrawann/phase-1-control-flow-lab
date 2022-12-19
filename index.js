function scuberGreetingForFeet(someValue) {
  // Write your code here!

  let result
  if (someValue <= 400) {
    result = 'This one is on me!'
  }
  else if (someValue > 400 && someValue < 2000) {
    result = 'That will be twenty bucks.'
  }
  else if (someValue > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    result = 'No can do.';

  }
  return result
}

function ternaryCheckCity(city) {
  // Write your code here!
  const result = city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}
function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result
  switch (tip) {
    case "generous":
      result = "Thank you so much."
      break;
    case "not as generous":
      result = "Thank you."
      break;
    default:
      result = "Bye."
      break;
  }
  return result
}


