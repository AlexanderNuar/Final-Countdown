const items = document.querySelectorAll(".countdown-item > h4");

const countdownElement = document.querySelector(".countdown")

let countdownDate = new Date(2022, 03, 01, 14, 22, 0).getTime();

console.log(countdownDate);

function getCountdownTime () {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay); 
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);


    const values = [days, hours, minutes, seconds];

    items.forEach(function(items, index) {
        items.textContent = (values[index]);
    })

    if (distance < 0 ) {
        clearInterval(countdown);
        countdownElement.innerHTML = '<h1 class="expired">boom!</h1>';
    }

   /*  return values; */
}
getCountdownTime()

let countdown = setInterval(getCountdownTime, 1000);

