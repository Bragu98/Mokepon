const botonMascotaJugador = document.getElementById("boton-mascota")
const ocultaBotonReiniciar = document.getElementById("boton-reiniciar")
const ocultaSeccionDeAtaque = document.getElementById("seleccion-de-ataque")
const botonReiniciar = document.getElementById("boton-reiniciar")


const ocultaSeccionDeSeleccionarMascota = document.getElementById("seleccion-de-mascota")
// const inputLangostelvis = document.getElementById("langostelvis")
// const inputTucapalma = document.getElementById("tucapalma")
// const inputPydos = document.getElementById("pydos")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const selectionMensaje = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques =  document.getElementById("contenedor-ataques")

let mokepones = []
let opcionDeMokepones
let ataqueJugador
let ataqueEnemigo = []
let mascotaJugador
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let ataquesMokepon
let ataqueMokeponEnemigo
let botonAgua 
let botonTierra
let botonFuego 
let ataquesJugador = []
let botones = []
let vidasEnemigo = 3
let vidasjugador = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
    }
}

let hipodoge = new Mokepon ("Hipodoge", "../imagenes/mokepons_mokepon_hipodoge_attack.png", 5)

let capipepo = new Mokepon ("Capipepo", "../imagenes/mokepons_mokepon_capipepo_attack.png", 5)

let ratigueya = new Mokepon ("Ratigueya", "../imagenes/mokepons_mokepon_ratigueya_attack.png", 5)

hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"}
)

capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}
)

ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"}
)

mokepones.push(hipodoge,capipepo,ratigueya)

function inicirJuego() {
    ocultaSeccionDeAtaque.style.display = "none"

    ocultaBotonReiniciar.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarjuego)

}

function seleccionarMascotaJugador() {
    ocultaSeccionDeSeleccionarMascota.style.display = "none"
    ocultaSeccionDeAtaque.style.display = "flex"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Debes seleccionar alguna mascota")
        location.reload()
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques (mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques (ataques)
}

function mostrarAtaques (ataques) {
    ataques.forEach((ataque) =>{
        ataquesMokepon = `<button id= ${ataque.id} class="boton-ataque  BAtaque">${ataque.nombre}</button>`
    
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botonFuego = document.getElementById("boton-fuego")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaques () {
    botones.forEach((boton) => {
        boton.addEventListener ("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataquesJugador.push ("Fuego 🔥")
                console.log(ataquesJugador)
                boton.style.background = "#FFC23C"
            } else if (e.target.textContent === "💧") {
                ataquesJugador.push ("Agua 💧")
                console.log(ataquesJugador)
                boton.style.background = "#FFC23C"
            } else {
                ataquesJugador.push ("Tierra 🌱")
                console.log(ataquesJugador)
                boton.style.background = "#FFC23C"
            }
            ataqueAleatorioEnemigo ()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones [mascotaEnemigo].nombre
    ataqueMokeponEnemigo = mokepones [mascotaEnemigo].ataques
    secuenciaAtaques ()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio (0, ataqueMokeponEnemigo.length - 1) 
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push ("Fuego 🔥")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push ("Agua 💧")
    } else {
        ataqueEnemigo.push ("Tierra 🌱")
    }
    console.log(ataqueEnemigo)
    resultadoDelCombate()
}

function resultadoDelCombate() {

    if ((ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Tierra 🌱") || (ataqueJugador == "Agua 💧" && ataqueEnemigo == "Fuego 🔥") || (ataqueJugador == "Tierra 🌱" && ataqueEnemigo == "Agua 💧")) {
        crearMensaje("Ganaste 💪")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate 🤡")
    } else {
        crearMensaje("Perdiste 😡")
        vidasjugador--
        spanVidasJugador.innerHTML = vidasjugador
    }

    ganador()
}
function ganador() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Ganaste la partida 🎉")
    } else if (vidasjugador == 0) {
        crearMensajeFinal("Perdiste la partida 😥")
    }
}

function crearMensaje(resultado) {

    selectionMensaje.innerHTML = resultado
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelEnemigo.innerHTML = ataqueEnemigo

}

function crearMensajeFinal(resultadoFinal) {
    ocultaBotonReiniciar.style.display = "block"

    selectionMensaje.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarjuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", inicirJuego)