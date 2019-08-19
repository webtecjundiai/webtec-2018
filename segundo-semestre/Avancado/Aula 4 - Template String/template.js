
// Modo antigo de criar template string

window.onload = function () {
  let meuTemplate = '<tag>Conteudo Aqui</tag>'+
                    '<tag>Conteudo Aqui</tag>'+
                    '<tag>Conteudo Aqui</tag>'+
                    '<tag>Conteudo Aqui</tag>';

  document.getElementById("meuTemplate").innerHTML = meuTemplate;
};

// Modo novo de criar template string com cráse

window.onload = menu;
 
function menu () {

    let meuTemplate1 = `<a>Template aqui</a>
                        <a>Template aqui</a>
                        <a>Template aqui</a>
                        <a>Template aqui</a>`;

    document.getElementById("meuTemplate1").innerHTML = meuTemplate1;
}

