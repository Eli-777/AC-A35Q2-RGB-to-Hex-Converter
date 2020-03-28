const redChange = document.getElementById('redRange')
const greenChange = document.getElementById('greenRange')
const blueChange = document.getElementById('blueRange')
const hexColorCode = document.getElementById('hexColor')

/* function rgbToHex() {
    let redValue = Number(redChange.value).toString(16)
    let greenValue = Number(greenChange.value).toString(16)
    let blueValue = Number(blueChange.value).toString(16)
    return hexColorCode.innerHTML = `<h3>#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}</h3>`
} */

/* function bgColor() {
    return document.body.style.backgroundColor = hexColorCode.innerText
} */

/* function changeColor() {
    rgbToHex()
    bgColor()
} */


function changeColor() {
    let redValue = Number(redChange.value).toString(16)
    let greenValue = Number(greenChange.value).toString(16)
    let blueValue = Number(blueChange.value).toString(16)
    hexColorCode.innerHTML = `<h3>#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}</h3>`
    document.body.style.backgroundColor = hexColorCode.innerText
}


// listen to color bar
redChange.addEventListener('input', changeColor)
greenChange.addEventListener('input', changeColor)
blueChange.addEventListener('input', changeColor)