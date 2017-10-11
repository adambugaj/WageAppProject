function wage() {
    let input = document.getElementById('annualInput').value;
    let output = document.getElementById('resultMonthly');
    // it doesn't work, but it works with pure document.getElementById('result').innerHTML = input;
    output.innerHTML = input;
    
    
    // annual wage devided by 12 months
    let resultMonthly = input / 12;
    let showMonthly = 'Your monthly wage: ' + resultMonthly.toFixed(2);
    
    // monthly wage devided by 20 days
    let resultDaily = resultMonthly / 20;
    let showDaily = 'Your daily wage: ' + resultDaily.toFixed(2);
    
    // daily wage devided by 8 hours
    let resultHourly = resultDaily / 8;
    let showHourly = 'Your hourly wage: ' + resultHourly.toFixed(2);
    
    input = +input;

     //check if input is empty and if string is number
     if (input) {
         if (isNaN(input) !== true) {
            document.getElementById('resultMonthly').innerHTML = showMonthly + ' $';
            document.getElementById('resultDaily').innerHTML = showDaily + ' $';
            document.getElementById('resultHourly').innerHTML = showHourly + ' $';
         } 
         else {
        document.getElementById('resultMonthly').innerHTML = 'Please, type your annual wage';
        document.getElementById('resultDaily').innerHTML = "e.g 125000";
        document.getElementById('resultHourly').innerHTML = "and click the button 'check'";
         }
     }

    
    // switch option for wage occupation
    let storeWage;
    let dev = document.getElementById('dev').value;
    
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
    
    
      //  check and test
    let getValue = document.getElementById("annualInput").value
    
//    let numberValue = +getValue || getValue;
//    alert(typeof numberValue);
//   
//    if (numberValue !== '') {
//        // this if doesn't work even with string and number
//         if (typeof numberValue == 'number')
//            document.getElementById('devOutput').innerHTML = "great " + numberValue;
//        else alert("try again")
//    } else {
//        document.getElementById('devOutput').innerHTML = 'Please, type your annual wage';
//    }
    if (!isNaN(getValue)) {
        document.getElementById("devOutput").innerHTML = getValue;Number(getValue);
    } else {
        document.getElementById('devOutput').innerHTML = 'Please, type your annual wage';
    }
    alert(typeof getValue)
//    let numberValue = !isNaN(Number(getValue)) ? Number(getValue) : document.getElementById('devOutput').innerHTML = 'Please, type your annual wage';
//    alert(typeof numberValue);
    
}




