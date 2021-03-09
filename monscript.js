console.log("ok")

let img = document.getElementById("sample-image")
let nivGris = document.querySelector("#grayscale")
let nivHue = document.getElementById("hue")
let nivEspacement = document.getElementById("spacing")
let nivBrouiller = document.getElementById("blur")
let couleur = document.getElementById("base")



nivGris.addEventListener('input', showVal)

/*
nivHue.addEventListener('change', showVal)
nivEspacement.addEventListener('change', updateValue)
nivBrouiller.addEventListener('change', updateValue)
*/

couleur.addEventListener('change', showVal)

function showVal() {
    console.log(nivGris.value)
    img.style.filter = "drop-shadow(" + nivEspacement.value + "px " + nivEspacement.value + "px "+ nivBrouiller.value + "px "+ couleur.value + ")" + "hue-rotate(" + nivHue.value + "deg)" + "grayscale(" + nivGris.value + "%)" 
}

function showVal(){
    console.log("nivGris.value")
    img.style.filter = "drop-shadow(" + nivEspacement.value + "px " + nivEspacement.value + "px "+ nivBrouiller.value + "px "+ couleur.value + ")" + "hue-rotate(" + nivHue.value + "deg)" + "grayscale(" + nivGris.value + "%)" 
}


// Ce que j'ai fais avant de découvrir la fonction change // 

/*
nivGris.onclick = function gris() {
    console.log("test")
    img.style.filter = "grayscale(" + nivGris.value + "%)" + "hue-rotate(" + nivHue.value + "deg)" +   "drop-shadow(" + nivEspacement.value + "px " + nivEspacement.value + "px "+ nivBrouiller.value + "px "+ couleur.value + ")"

}

nivHue.onclick = function hue() {
    console.log("test")
    img.style.filter = "hue-rotate(" + nivHue.value + "deg)" + "grayscale(" + nivGris.value + "%)" +   "drop-shadow(" + nivEspacement.value + "px " + nivEspacement.value + "px "+ nivBrouiller.value + "px "+ couleur.value + ")"
}


nivEspacement.onclick = function spacing() {
    console.log("test")
    img.style.filter =  "drop-shadow(" + nivEspacement.value + "px " + nivEspacement.value + "px "+ nivBrouiller.value + "px "+ couleur.value + ")" + "hue-rotate(" + nivHue.value + "deg)" + "grayscale(" + nivGris.value + "%)" 
}

nivBrouiller.onclick = function blur() {
    console.log("test")
    img.style.filter = "drop-shadow(" + nivEspacement.value + "px " + nivEspacement.value + "px "+ nivBrouiller.value + "px "+ couleur.value + ")" + "hue-rotate(" + nivHue.value + "deg)" + "grayscale(" + nivGris.value + "%)"  
}

*/
