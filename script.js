const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

window.addEventListener('load', () => {
    celsiusInput.focus()
})

celsiusInput.addEventListener('input', () => {
    fahrenheitInput.value = ((celsiusInput.value * 9) / 5 + 32).toFixed(2);
    kelvinInput.value = ((celsiusInput.value) + 273.15).toFixed(2);

    if(!celsiusInput.value) fahrenheitInput.value = "";

})