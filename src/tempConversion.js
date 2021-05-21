const convertKelvinToFahrenheit = (kelvin) => {
    let fahrenheitTemp = ((kelvin - 273.15) * 9/5 + 32);
    return fahrenheitTemp
}

export default convertKelvinToFahrenheit