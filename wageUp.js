function wage() {
    let input = document.getElementById('annualInput').value;
    let output = document.getElementById('resultMonthly');
    // it doesn't work, but it works with pure document.getElementById('result').innerHTML = input;
    output.innerHTML = input;

    
  /*  
    if (input !== '') {
        // this if doesn't work even with string and number
         if (typeof input == 'number')
            document.getElementById('result').innerHTML = input;
    } else {
        document.getElementById('result').innerHTML = 'Please, type your annual wage';
    }
    
    */
    
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
    
     if (input !== '') {
         if (typeof input === 'number')
        document.getElementById('resultMonthly').innerHTML = showMonthly + ' $';
        document.getElementById('resultDaily').innerHTML = showDaily + ' $';
        document.getElementById('resultHourly').innerHTML = showHourly + ' $';
    } else {
        document.getElementById('resultMonthly').innerHTML = 'Please, type your annual wage';
    }
}

let showHourly = 5;


document.write(showHourly);
