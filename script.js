let sonkirgiz = +prompt("Birinchi sonni kirigizing")

let qiymatnikiriting = prompt("Qiymatni kiriting" + "\n" + "1) +" + "\n" + "2) -" + "\n" + "3) %" + "\n" + "4) *")

let sonni2kirgiz = +prompt("Ikkinchi sonni kirgizing")

function check() {

    if (qiymatnikiriting === '+') {
        let javob = sonkirgiz + sonni2kirgiz;
        document.getElementById("javob").innerHTML = " Javob: " + javob;
    } else if (qiymatnikiriting === '-') {
        let javob = sonkirgiz - sonni2kirgiz;
        document.getElementById("javob").innerHTML = " Javob: " + javob;
    } else if (qiymatnikiriting === '%') {
        let kalkulator = document.getElementById("javob").innerHTML = " Javob: " + Number(sonkirgiz) / Number(sonni2kirgiz)
    } else if (qiymatnikiriting === '*') {
        let kalkulator = document.getElementById("javob").innerHTML = " Javob: " + Number(sonkirgiz) * Number(sonni2kirgiz)
    } else {
        alert("Notogri Operator")
    }

    let birinchi = document.getElementById("birinchi").innerHTML = sonkirgiz
    let qiymat = document.getElementById("qiymat").innerHTML = qiymatnikiriting
    let ikkinchi = document.getElementById("ikkinchi").innerHTML = sonni2kirgiz
}


