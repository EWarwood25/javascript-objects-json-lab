(function(){ 
console.info("Hello JS"); 
})();
const myNode = document.createElement("div");
digitalClock.appendChild(myNode);
const newDate = new Date();
myNode.innerHTML = newDate.toDateString();