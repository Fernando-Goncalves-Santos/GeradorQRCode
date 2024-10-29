// Elementos

const input = document.querySelector("#qr-form input")
const gerarBtn = document.querySelector("#qr-form button")
const container = document.querySelector(".container")
const qrCodeImg = document.querySelector("#qr-code img")
// Funções

function gerarQrCode () {
    const valorInput = input.value
    if(!valorInput) return;
    gerarBtn.textContent = "Gerando Código..."
    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorInput}`
    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active")
        gerarBtn.textContent = "Código Gerado!"
    }) 
    
}

// Eventos

gerarBtn.addEventListener("click", (e) => {
    e.preventDefault()
    gerarQrCode()
    
})

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        gerarQrCode()
    }
})

input.addEventListener("keyup", () => {
    if(!input.value) {
        container.classList.remove("active")
        gerarBtn.textContent = "Gerar QR Code"
    }
})