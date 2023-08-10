let adviceBox = document.querySelector('.advice-box');
let adviceId = document.querySelector('#advice-id')
let nextAdvice = document.querySelector('.active-button')

function next() {
var request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice', true);
request.onload = function() {
    if (this.status === 200) {
        var response = JSON.parse(this.responseText);
        var advice = response.slip.advice;
        adviceId.innerHTML = response.slip.id
        adviceBox.innerHTML = advice;
    } else {
        console.log('wrong');
    }
};
request.send();

}
nextAdvice.addEventListener('click', next)
