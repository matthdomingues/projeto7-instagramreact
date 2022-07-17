export default function Sidebar() {

    return (
        <div class="sidebar">

            <Usuario img="assets/img/catanacomics.svg"
                usuario1="catanacomics"
                usuario2="catana" />

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )

}

function Usuario(props) {

    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.usuario1}</strong>
                {props.usuario2}
            </div>
        </div>
    )
}

function Sugestoes() {

    const sugest = [{
        img: "assets/img/bad.vibes.memes.svg",
        nome: "bad.vibes.memes",
        razao: "Segue você"
    }, {
        img: "assets/img/chibirdart.svg",
        nome: "chibirdart",
        razao: "Segue você"
    }, {
        img: "assets/img/razoesparaacreditar.svg",
        nome: "razoesparaacreditar",
        razao: "Novo no Instagram"
    }, {
        img: "assets/img/adorable_animals.svg",
        nome: "adorable_animals",
        razao: "Segue você"
    }, {
        img: "assets/img/smallcutecats.svg",
        nome: "smallcutecats",
        razao: "Segue você"
    }]

    function Sugestao(props) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.img} />
                    <div class="texto">
                        <div class="nome">{props.nome}</div>
                        <div class="razao">{props.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        )
    }
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugest.map(s => (<Sugestao img={s.img} nome={s.nome} razao={s.razao} />))}

        </div>

    )
}