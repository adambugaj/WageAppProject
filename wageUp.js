function hideDiv() {
    var getDiv = document.getElementById("resultMonthly");
    getDiv.style.display = "none";
     var getDiv = document.getElementById("resultDaily");
    getDiv.style.display = "none";
     var getDiv = document.getElementById("resultHourly");
    getDiv.style.display = "none";
     var getDiv = document.getElementById("devOutput");
    getDiv.style.display = "none";     
}

function wage() {
    let input = document.getElementById('annualInput').value;
    var output = document.getElementById('resultMonthly');
    // it doesn't work, but it works with pure document.getElementById('result').innerHTML = input;
   
    
    
    // annual wage devided by 12 months
    var resultMonthly = input / 12;
    var showMonthly = 'Your monthly wage: ' + resultMonthly.toFixed(2);
    
    // monthly wage devided by 20 days
    var resultDaily = resultMonthly / 20;
    var showDaily = 'Your daily wage: ' + resultDaily.toFixed(2);
    
    // daily wage devided by 8 hours
    var resultHourly = resultDaily / 8;
    var showHourly = 'Your hourly wage: ' + resultHourly.toFixed(2);
   
    var getValue = document.getElementById("annualInput").value
    
    var getNumber = Number(getValue);
    var numberValue = +getValue || getValue;
    
    //check whether is string or number
    alert(typeof numberValue);
    
    
     //check if input is empty and if string is a number
     if (getValue !== '') {
         if (!isNaN(getNumber)) {
             
            document.getElementById('resultMonthly').innerHTML = showMonthly + ' $';
            document.getElementById('resultDaily').innerHTML = showDaily + ' $';
            document.getElementById('resultHourly').innerHTML = showHourly + ' $';
         } else {
              alert("This is not a number, please try again");
         }
     } else {
        document.getElementById('resultMonthly').innerHTML = "Please, type your annual wage";
        document.getElementById('resultDaily').innerHTML = "e.g 125000";
        document.getElementById('resultHourly').innerHTML = "and click the button 'check'";
         }
    
    
    var getDiv = document.getElementById("resultMonthly");
    var getDiv1 = document.getElementById("resultDaily");
    var getDiv2 = document.getElementById("resultHourly");
    var getDiv3 = document.getElementById("devOutput");
 
    
    if (getDiv) {
                 getDiv.style.display = "block";
                 getDiv1.style.display = "block";
                 getDiv2.style.display = "block";
                 getDiv3.style.display = "block";
             } else {
                 getDiv.style.display = "none";
             }

    
    // switch option for wage occupation
    var storeWage;
    var dev = document.getElementById('dev').value;
    
    switch(dev) {
        case "junior developer":
            storeWage = "40 000 $";
            break;
        case "mid developer":
            storeWage = "75 000 $";
            break;
        case "senior developer":
            storeWage = "120 000 $";
            break;
        default:
            storeWage = "Choose one category of developers";
    }
    document.getElementById('devOutput').innerHTML = "Estimated wage for " + dev + ": " + storeWage;
    
    
}