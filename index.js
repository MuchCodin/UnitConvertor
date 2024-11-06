let inputField = document.querySelector(".light-mode-child")
let conversionResult = document.querySelectorAll(".supporting-text")

function feetToMeters(value){
    let res = value /3.281
    return res.toFixed(3)
}

function metersToFeet(value){
    let res = value * 3.281
    return res.toFixed(3)
}

function kiloToPounds(value){
    let res = value *  2.205
    return res.toFixed(3)
}

function poundsToKilo(value){
    let res = value /  2.205
    return res.toFixed(3)
}

function gallonsToLiters(value){
    let res = value * 3.785
    return res.toFixed(3)
}

function litersToGallons(value){
    let res = value / 3.785
    return res.toFixed(3)
}

const convertButton = document.querySelector(".button")
convertButton.addEventListener("click", ()=>{
    const inputNumber = inputField.value;
    const numberToConvert = parseFloat(inputNumber);
    
    
    conversionResult[0].textContent = `
    ${numberToConvert} meters = ${metersToFeet(numberToConvert)} feet | ${numberToConvert}
    feet = ${feetToMeters(numberToConvert)} meters`

    conversionResult[1].textContent = `
    ${numberToConvert} liters = ${litersToGallons(numberToConvert)} gallons | ${numberToConvert}
    gallons = ${gallonsToLiters(numberToConvert)} liters`

    conversionResult[2].textContent = `
    ${numberToConvert} kilograms = ${kiloToPounds(numberToConvert)} pounds | ${numberToConvert}
    pounds = ${poundsToKilo(numberToConvert)} kilograms`

})


