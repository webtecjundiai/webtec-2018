let app = new Vue({
    el: "#app",
    data: {
        titulo: "Iniciando com o Framework Vue",
        texto: false,
        usuario: {
            id: 1,
            nome: "Jon Snow",
            profissao: "Ator"
        },
        linguagens: [
            {nome: "Javascript"},
            {nome: "PHP"},
            {nome: "C#"},
            {nome: "Java"}
        ],
        nome: "",
    }
});