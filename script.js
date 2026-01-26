const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

window.addEventListener('load', () => {
    celsiusInput.focus()
})

celsiusInput.addEventListener('input', () => {
    fahrenheitInput.value = ((celsiusInput.value * 9) / 5 + 32).toFixed(2);
    kelvinInput.value = (Number(celsiusInput.value) + 273.15).toFixed(2);

    if(!celsiusInput.value) fahrenheitInput.value = "";
    if(!celsiusInput.value) kelvinInput.value = "";

})

fahrenheitInput.addEventListener('input', () => {
    celsiusInput.value = (((fahrenheitInput.value - 32) * 5) / 9).toFixed(2);
    kelvinInput.value = ((((fahrenheitInput.value - 32) * 5) / 9) + 273.15).toFixed(2);

    if(!fahrenheitInput.value) celsiusInput.value = "";
    if(!fahrenheitInput.value) kelvinInput.value = "";
})

kelvinInput.addEventListener('input', () => {
    celsiusInput.value = (kelvinInput.value - 273.15).toFixed(2);
    fahrenheitInput.value = (((kelvinInput.value - 273.15) * 9) / 5 + 32).toFixed(2);

    if(!kelvinInput.value) celsiusInput.value = "";
    if(!kelvinInput.value) fahrenheitInput.value = "";
})

