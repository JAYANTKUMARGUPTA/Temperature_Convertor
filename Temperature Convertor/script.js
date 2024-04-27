function convert() {
    var fromUnit = document.getElementById("fromunit").value;
    var toUnit = document.getElementById("tounit").value;
    var temperature = parseFloat(document.getElementById("temperature").value);
    var result;
    var resultUnit

    if (fromUnit === "C" && toUnit === "F") {
        result = (temperature * 9/5) + 32;
        resultUnit = 'F'

    } else if (fromUnit === "F" && toUnit === "C") {
        result = (temperature - 32) * 5/9;
        resultUnit = 'C'
    } else {
        result = temperature; // If both units are the same, no conversion needed
    }

    document.getElementById("result").value = result.toFixed(2) + " " + resultUnit;
}