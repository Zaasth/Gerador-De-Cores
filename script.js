GerarCorAleatoriaHexa();

function GerarCorAleatoriaHexa() {
    const body = document.querySelector("body")
    const botão = document.querySelector("#botão");
    const form = document.querySelector("#form");
    const letras = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const title = document.querySelector("#title");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        let RandomNumber1 = Math.floor(Math.random()*10),RandomNumber2 = Math.floor(Math.random()*10), RandomNumber3 = Math.floor(Math.random()*10), RandomNumber4 = Math.floor(Math.random()*10), RandomNumber5 = Math.floor(Math.random()*10), RandomNumber6 = Math.floor(Math.random()*10);
    
        let RandomColor = "#"+letras[RandomNumber1]+letras[RandomNumber2]+letras[RandomNumber3]+letras[RandomNumber4]+letras[RandomNumber5]+letras[RandomNumber6];
        body.style.backgroundColor = RandomColor;
        title.innerHTML = "A sua cor é: " + RandomColor; 
    
        console.log("#"+letras[RandomNumber1]+letras[RandomNumber2]+letras[RandomNumber3]+letras[RandomNumber4]+letras[RandomNumber5]+letras[RandomNumber6])
    
    });
}