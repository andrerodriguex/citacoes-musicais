var musicas = [
    {
        citacao: "You can work your way to the top, just know that there's up and downs and there's drops",
        artista: "Get Well Soon by Ariana Grande",
        capa: "images/ariana-cover.jpg"
    },
    {
        citacao: "You can blow out my candle but you'll never put out my fire",
        artista: "Blow Out My Candle by Betty Who",
        capa: "images/betty-cover.png"
    },
    {
        citacao: "I'm gonna keep climbing till I see the top",
        artista: "The High Road by Jojo",
        capa: "images/jojo-cover.jpg"
    },
    {
        citacao: "If we loved each other we would find victory",
        artista: "Fly Like a Bird by Mariah Carey",
        capa: "images/mariah-cover.jpg"
    },
    {
        citacao: "There's no one like you, no one like you",
        artista: "Forever 1 by Girls' Generation",
        capa: "images/snsd-cover.jpg"
    },
    {
        citacao: "Can't change things you can't control, so let those worries wash away",
        artista: "Be Like Water by PJ Morton",
        capa: "images/pj-cover.jpg"
    },
    {
        citacao: "And then life was beautiful, a beautiful life",
        artista: "And Then Life Was Beautiful by NAO",
        capa: "images/nao-cover.jpg"
    },
    {
        citacao: "We don't need to be related to relate, we don't need to share genes or a surname",
        artista: "Chosen Family by Rina Sawayama",
        capa: "images/rina-cover.jpg"
    },
    {
        citacao: "I gotta trust the process, I gotta let the hours go by",
        artista: "Healing Hurts by Amber Mark",
        capa: "images/amber-cover.jpg"
    },
    {
        citacao: "I wanna be a friend you can keep",
        artista: "F.U.C.K. by Victoria Monét",
        capa: "images/victoria-cover.jpg"
    }
];

function gerarCitacao() {
    var numeroAleatorio = Math.floor(Math.random() * (musicas.length));
    var citacaoAleatoria = musicas[numeroAleatorio];
    return citacaoAleatoria;
}

function exibirCitacao() {
    var musicas = gerarCitacao();
    var caixaCitacao = document.getElementById("caixa-citacao");
    var conteudoCitacao = `<p class="citacao">${musicas.citacao}</p><p class="artista">${musicas.artista}</p>`;
    caixaCitacao.innerHTML = conteudoCitacao;

    document.querySelector(".bg-img").style.backgroundImage = `url('${musicas.capa}')`;
}

window.setInterval(function () {
    exibirCitacao();
}, 15000);

document.getElementById("proxima").addEventListener("click", exibirCitacao, false);
