getFrases();


function getFrases(){

    let url = 'http://127.0.0.1:5000/json/frases.json';

    fetch(url)
        .then(function(response){
            response.json().then(function(data){
                preencherHTML(data);
            });
        });
        
}

function preencherHTML(data){
    let template = '';
    
    data.forEach(element => {

        let textoFormatado = element.texto.replace(/\n/g,"<br/>");

        template += `<button class="accordion">Frase ${element.id} - ${element.titulo}</button>
                        <div class="panel">
                            <p>- ${textoFormatado}</p>
                        </div>`;
    });
    
    document.getElementById("frases").innerHTML = template;
    
    accordion();
}


// Script JS do Accordion
function accordion(){
    var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    
}