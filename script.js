// Write your JavaScript code here!

   //This block of code shows how to format the HTML once you fetch some planetary JSON!
   window.addEventListener("load", function() {
   this.fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      response.json().then(function(json){
         let index = Math.floor(Math.random()*json.length);
         console.log(json[index].name);
         document.getElementById('missionTarget').innerHTML=`
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
      });
   });
 
   
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
     event.preventDefault();

   
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    let faultyItems = document.getElementById('faultyItems');
    let cargoStatus = document.getElementById('cargoStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let readyForLaunch = true;

   if (pilotNameInput.value === ""|| copilotNameInput.value === ""|| fuelLevelInput.value === "" ||cargoMassInput.value === "") {
        alert("All fields are required!");
        faultyItems.style.visibility = 'hidden';
        launchStatus.style.color = 'black';
        launchStatus.innerHTML = 'Awaiting Information Before Launch';
   }

   if(isNaN(fuelLevelInput.value)|| isNaN(cargoMassInput.value)||!isNaN(pilotNameInput.value )||!isNaN(copilotNameInput.value) ) {
         alert('Make sure to enter valid information for each field');
         faultyItems.style.visibility = 'hidden';
         launchStatus.style.color = 'black';
         launchStatus.innerHTML = 'Awaiting Information Before Launch';
        } else {

      faultyItems.style.visibility = 'visible';
      document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         
     if (fuelLevelInput.value < 10000) {
            readyForLaunch = false;
             fuelStatus.innerHTML = 'Fuel level too low for launch';
             launchStatus.innerHTML = 'Shuttle not ready for launch';
             launchStatus.style.color = 'red';
         } else{
               fuelStatus.innerHTML = 'Fuel level high enough for launch';
         }

      if (cargoMassInput.value > 10000) {
            readyForLaunch = false;
            cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off';
            launchStatus.innerHTML= 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
         } else {
               cargoStatus.innerHTML = 'Cargo mass low enough for launch';
         }
      if(readyForLaunch){
          launchStatus.style.color = 'green';
         launchStatus.innerHTML = 'Shuttle is ready for launch';
       }     
    }
   
   });

 });







