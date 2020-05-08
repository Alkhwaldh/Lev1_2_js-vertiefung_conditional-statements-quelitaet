


function getWeather() {
    const wetter = document.getElementById("weather").value;
    const ergebnisse = document.getElementById("ergebnisse");

   /*  result.innerHTML = wetter.value; */

    if (wetter >= 8 && wetter <= 10) {

        ergebnisse.innerHTML += " " + "grate";
      
       
    } else if (wetter >= 6 && wetter < 8){

        ergebnisse.innerHTML+= " " + "gut";
        
    }
     else if (wetter >= 3 && wetter < 6){

        ergebnisse.innerHTML+= " " + "ok";
        
    } else {
        ergebnisse.innerHTML+=" " + "sclecht";

    }
    
}

