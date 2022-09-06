// get the result element
let resultado = document.getElementById("result");
let led = document.getElementById("led");

var Sound__TurnOn = document.getElementById('Sound__TurnOn');
var Sound__Press = document.getElementById('Sound__Press');
var Sound__ocean = document.getElementById('ocean_controls');
Sound__ocean.volume = 0.3;

var on = false;

function mar(){
sound__ocean.play();
}

function power() {
    Sound__TurnOn.play();
    if (on == false) {
        setTimeout(function() { // DELAY PARA LIGAR

            resultado.value = "00000000000000";

        }, 400);

        setTimeout(function() {
            resultado.value = "";

            on = true;
            console.log(on);
            led.classList.toggle("calculadora_active");
        }, 1000);




    } else {

        on = false;
        console.log(on);
        setTimeout(function() { // DELAY PARA DESLIGAR

            led.classList.remove("calculadora_active");

        }, 400);

        setTimeout(function() {
            resultado.value = "";
            led.classList.toggle("calculadora_active");
        }, 1000);

        setTimeout(function() {
            resultado.value = "";
            led.classList.remove("calculadora_active");;

        }, 1600);

    }

}


// inputs que estão no index, ao apertar eles retorna os valores definidos
function input(num) {
    if (on == true) {
        Sound__Press.play();
        let number = resultado.value;
        resultado.value = number + num;
    } else { return }
}

// logica da calculadora
function calc() {

    if (on == true) {
        Sound__TurnOn.play();
        if (resultado.value != "") {
            let resultado2 = resultado.value;
            resultado.value = eval(resultado2)
        } else {
            Sound__Press.play();
            resultado.value = "ERROR";
            on = false;

        }
    }

}



// Reset button
function reset() {
    if (on == true || resultado.value == "ERROR") {
        Sound__TurnOn.play();
        resultado.value = "";
        on = true;
    }
}

// Del button
function del() {
    if (on == true) {
        Sound__Press.play();
        let resultado2 = resultado.value;
        resultado.value = resultado2.substring(0, resultado2.length - 1);
    }
}
