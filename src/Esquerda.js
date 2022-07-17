export default function Esquerda() {

    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>

    )

}

function Stories() {

    const story = [{ usuario: "9gag", imagem: "assets/img/9gag.svg" },
    { usuario: "meowed", imagem: "assets/img/meowed.svg" },
    { usuario: "barked", imagem: "assets/img/barked.svg" },
    { usuario: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
    { usuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
    { usuario: "respondeai", imagem: "assets/img/respondeai.svg" },
    { usuario: "filomoderna", imagem: "assets/img/filomoderna.svg" },
    { usuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }]

    function Story(props) {
        return (
            <div class="story">
                <div class="imagem">
                    <img src={props.imagem} />
                </div>
                <div class="usuario">
                    {props.usuario}
                </div>
            </div>
        )
    }

    return (
        <div class="stories">
            {story.map(st => <Story usuario={st.usuario} imagem={st.imagem} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Posts() {

    const post = [{
        usuario: "meowed", imgUsuario: "assets/img/meowed.svg",
        imgPost: "assets/img/gato-telefone.svg", curtidoPor: "respondeai",
        imgCurtidoPor: "assets/img/respondeai.svg", qtdCurtidas: "101.523"
    },
    {
        usuario: "barked", imgUsuario: "assets/img/barked.svg",
        imgPost: "assets/img/dog.svg", curtidoPor: "adorable_animals",
        imgCurtidoPor: "assets/img/adorable_animals.svg", qtdCurtidas: "99.159"
    }]

    function PostIndividual(props) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imgUsuario} />
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imgPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imgCurtidoPor} />
                        <div class="texto">
                            Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {props.qtdCurtidas} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div class="posts">

            {post.map(p => (
                <PostIndividual usuario={p.usuario}
                    imgUsuario={p.imgUsuario}
                    imgPost={p.imgPost}
                    curtidoPor={p.curtidoPor}
                    imgCurtidoPor={p.imgCurtidoPor}
                    qtdCurtidas={p.qtdCurtidas}
                    ion1={p.ion1} />))}
        </div>
    )

}







