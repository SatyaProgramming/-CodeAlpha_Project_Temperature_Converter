console.log("Hello");
convert = document.getElementById('convert');
convert.addEventListener("click", (e) => {
    convertTo = document.getElementById('convertTo');
    convertTo = convertTo.value;
    console.log(convertTo);
    console.log(input)
    e.preventDefault();


    console.log("Hellow clicked");
    input = document.getElementById('input');
    input = input.value;

    from = document.getElementById('from');
    from = from.value;
    console.log(from);

    if (from == '°F') {
        convertTo = document.getElementById('convertTo');
        convertTo = convertTo.value;
        if (convertTo == 'Fahrenheit') {
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°F</sup></span>';
        } else if (convertTo == 'Celsius') {
            input = (input - 32) * (5 / 9);
            if ((input.toString().length) > 5) {
                input = input.toString().substr(0, 5);
            }
            console.log(input);
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°C</sup></span>';

        } else if (convertTo == 'Kelvin') {
            input = (input - 32) * (5 / 9) + 273.15;
            if ((input.toString().length) > 5) {
                input = input.toString().substr(0, 5);
            }
            console.log(input);
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°K</sup></span>';

        }
    } else if (from == '°C') {
        convertTo = document.getElementById('convertTo');
        convertTo = convertTo.value;
        if (convertTo == 'Celsius') {
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°C</sup></span>';
        } else if (convertTo == 'Fahrenheit') {
            input = (input * 9 / 5) + 32;
            if ((input.toString().length) > 5) {
                input = input.toString().substr(0, 5);
            }
            console.log(input);
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°F</sup></span>';

        } else if (convertTo == 'Kelvin') {
            input = Number.parseInt(input)+Number.parseFloat(273.15);
            if ((input.toString().length) > 5) {
                input = input.toString().substr(0, 5);
            }
            console.log(input);
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°K</sup></span>';

        }
    } else if (from == '°K') {
        convertTo = document.getElementById('convertTo');
        convertTo = convertTo.value;
        if (convertTo == 'Kelvin') {
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°K</sup></span>';
        } else if (convertTo == 'Celsius') {
            input = input-273.15;
            if ((input.toString().length) > 5) {
                input = input.toString().substr(0, 5);
            }
            console.log(input);
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°C</sup></span>';

        }else if (convertTo == 'Fahrenheit') {
            input = (input-273.15)*9/5+32;
            if ((input.toString().length) >6) {
                input = input.toString().substr(0, 5);
            }
            console.log(input);
            document.getElementById('right').innerHTML = '<span>' + input + '<sup>°F</sup></span>';

        }
    }


})