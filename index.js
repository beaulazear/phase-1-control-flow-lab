const distance = n;

function scuberGreetingForFeet(n){
   if (n <= 400)
   return ("This one is on me!");
   else if (n <= 2000)
   return ("That will be twenty bucks.");
   else if (n <= 2500)
   return ("I will gladly take your thirty bucks.");
   else if (n > 2500)
   return ("No can do.");
}

const city = j;

function ternaryCheckCity(j){
  const canTakeRide = j === "NYC" ? "Ok, sounds good." : "No go.";
  return canTakeRide;
}

const tip = i;

function switchOnCharmFromTip(i){
switch (i) {
  case "generous":
    return ("Thank you so much.");
  case ("not as generous"):
    return ("Thank you.");
  default:
    return "Bye.";
}
}