let $ = document

const Celi = $.getElementById('C')
const Farn = $.getElementById('F')

const result = $.getElementById('result')

const converter = $.getElementById('converter')

const convertButton = $.getElementById('convertButton')
const resetButton = $.getElementById('resetButton')
const changeButton = $.getElementById('changeButton')

convertButton.addEventListener('click', function () {
    if (converter.value === '') {
        result.style.color = '#993300'
        result.innerHTML = 'insert correct value!'
    } else {
        if (Celi.innerHTML === "°C") {
            result.style.color = 'rgb(255, 255, 102)'
            result.innerHTML = converter.value + '°C' + ' is: ' + ((converter.value * 1.8) + 32).toFixed(2) + '°C'
        } else if (Celi.innerHTML === "°F") {
            result.innerHTML = converter.value + '°F' + ' is: ' + ((converter.value - 32) / 1.8).toFixed(2) + '°F'
        }
    }
})
resetButton.addEventListener('click', function () {
    result.innerHTML = ''
    converter.value = ''
})

changeButton.addEventListener('click', function () {
    if (Celi.innerHTML === "°C") {
        Celi.innerHTML = '°F'
        Farn.innerHTML = '°C'
        $.title = 'Js | °F to °C '
        converter.placeholder = '°F'
    } else {
        Celi.innerHTML = '°C'
        Farn.innerHTML = '°F'
        $.title = 'Js | °C to °F '
        converter.placeholder = '°C'
    }
})