GerarCorAleatoriaHexa();


function GerarCorAleatoriaHexa() {
    const body = document.querySelector("body")
    const botão = document.querySelector("#botão");
    const form = document.querySelector("#form");  
    const title = document.querySelector("#title");
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let RandomColor = "#";

        for(let i = 0; i < 6; i++){
            RandomColor += numeros[RandomNumberFunction()]
        }
        body.style.backgroundColor = RandomColor;
        title.innerHTML = "A sua cor é: " + RandomColor; 
        
        RandomNumberFunction();
        function RandomNumberFunction(){
            return Math.floor(Math.random()*(numeros.length));
        }
    
    });
    
}
