(function(){ 
console.info("Hello JS"); 
})();
const myNode = document.createElement("div");
const digiClock = document.getElementById("digitalClock");
digiClock.appendChild(myNode);
const newDate = new Date();
myNode.innerHTML = newDate.toLocaleTimeString("en-GB", {timeStyle: "medium"});