function insert(num) {
    let numbers = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numbers + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = results.substring(0, result.length -1);
}

function calculate() {
    let result = document.getElementById('result').innerHTML;
    if(result){
      document.getElementById('result').innerHTML = eval(result)
    }
    else{
      document.getElementById('result').innerHTML = "?"
    }
}