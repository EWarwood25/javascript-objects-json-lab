(function(){ 
console.info("Hello JS"); 
})();
const myNode = document.createElement("div");
const digiClock = document.getElementById("digitalClock");
const secHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
digiClock.appendChild(myNode);
const updateTime = () => {
    //Digital
    const newDate = new Date();
    myNode.innerHTML = newDate.toLocaleTimeString("en-GB", {timeStyle: "medium"});  
    
    //Analogue
    const seconds = newDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secHand.style.transform = `rotate(${rotSeconds}deg)`;

    const minutes = newDate.getMinutes();
    const rotMinutes = minutes * 6 - 90;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;

    const hours = newDate.getHours();
    const rotHours = hours * 6 - 90;
    hrHand.style.transform = `rotate(${rotHours}deg)`;
};
setInterval(updateTime, 1000);
updateTime();

