function pingenerate() {
    let randomGenarate = Math.round(Math.random() * 10000);
    let pinString = randomGenarate + '';
    if (pinString.length == 4) {
        return pinString;

    } else if (pinString.length == 3) {
        console.log('get 3 length ');
        return pingenerate();
    }


}



document.getElementById('pin-genarate-button').addEventListener('click', function() {
    let genetaringPin = pingenerate();
    document.getElementById('pin-genarate-field').value = genetaringPin;


})