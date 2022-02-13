//random number genarate
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


});

//calculator handle
document.getElementById('key-pads').addEventListener('click', function(event) {
    const inputNumber = event.target.innerText;
    const previousInput = document.getElementById('input-key');
    if (isNaN(inputNumber)) {
        if (inputNumber == 'C') {
            previousInput.value = '';

        }

    } else {
        const previousNumber = previousInput.value;
        const newNumber = previousNumber + inputNumber;
        previousInput.value = newNumber;



    }
    // if (document.getElementById('pin-genarate-field').value = previousInput.value) {
    //     const notMatched = document.getElementById('did-not-matched');
    //     notMatched.style.display = 'none';
    // }



});
//pin matched
function verify() {
    const finalPin = document.getElementById('pin-genarate-field').value;
    const typedPin = document.getElementById('input-key').value;
    const success = document.getElementById('matched');
    const failed = document.getElementById('failed');
    if (finalPin == typedPin) {
        success.style.display = 'block';
        failed.style.display = 'none';
    } else {
        success.style.display = 'none';
        failed.style.display = 'block';
    }

}