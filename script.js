function retangulo(){
    let ladoRetangulo = Number(prompt("Qual o valor do lado do retângulo?"))
    let baseRetangulo = Number(prompt("Qual o valor da base do retângulo?"))
    let alturaRetangulo = Number(prompt("Qual a altura do retângulo?"))
    let valorRetangulo = ladoRetangulo*baseRetangulo*alturaRetangulo;;
    alert(`O valor do volume do retângulo é de ${valorRetangulo} m³`)
    textoRetangulo = document.querySelector('h2#retangulo')
    textoRetangulo.textContent = `O valor do volume do retangulo é de ${valorRetangulo} m³`
}



     function piramide(){
        let ladoPiramide = Number(prompt("Qual o valor do lado da base da piramide?"))
        let alturaPiramide = Number(prompt("Qual o valor da altura da piramide"))
        let valorPiramide = ((ladoPiramide*ladoPiramide)*alturaPiramide)/3
        alert(`o valor do volume da piramide é de ${valorPiramide} m³`)
        textoPiramide = document.querySelector('h2#piramide')
        textoPiramide.textContent = `O valor do volume da piramide é de ${valorPiramide} m³`
     }
    



     function cilindro(){
        const pi = 3.14
        let raioCilindro = Number(prompt("Qual o valor do raio da base do cilindro?"))
        let alturaCilindro = Number(prompt("Qual o valor da altura do cilindro?"))
        let valorCilindro = ((pi*(raioCilindro*raioCilindro))*alturaCilindro)
        alert(`o valor do volume do cilindro é de ${valorCilindro} m³`)        
        textoCilindro = document.querySelector('h2#cilindro')
        textoCilindro.textContent = `O valor do volume do cilindro é de ${valorCilindro} m³`
    }


     function esfera(){
        const pi = 3.14
        let raioEsfera = Number(prompt("Qual o valor do raio da esfera?"))
        let valorEsfera = (4*pi*(raioEsfera*raioEsfera*raioEsfera))/3
        alert(`o valor do volume da esfera é de ${valorEsfera} m³`)
        textoCone = document.querySelector('h2#esfera')
        textoCone.textContent = `O valor do volume do esfera é de ${valorEsfera} m³`
    }

     function cone(){
        const pi = 3.14
        let raioCone = Number(prompt("Qual o valor do raio da base do cone?"))
        let alturaCone = Number(prompt("Qual o valor da altura do cone?"))
        let valorCone = ((pi*(raioCone*raioCone))*alturaCone)/3
        alert(`o valor do volume do cone é de ${valorCone} m³`)
        textoCone = document.querySelector('h2#cone')
        textoCone.textContent = `O valor do volume do cone é de ${valorCone} m³`
     }