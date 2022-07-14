export default function Esquerda() {

    return (
        <div class="esquerda">

            <div class="stories">

                <Stories img="assets/img/9gag.svg"
                    usuario="9gag" />

                <Stories img="assets/img/meowed.svg"
                    usuario="meowed" />

                <Stories img="assets/img/barked.svg"
                    usuario="barked" />

                <Stories img="assets/img/nathanwpylestrangeplanet.svg"
                    usuario="nathanwpylestrangeplanet" />

                <Stories img="assets/img/wawawicomics.svg"
                    usuario="9gwawawicomicsag" />

                <Stories img="assets/img/respondeai.svg"
                    usuario="respondeai" />

                <Stories img="assets/img/filomoderna.svg"
                    usuario="filomoderna" />

                <Stories img="assets/img/memeriagourmet.svg"
                    usuario="memeriagourmet" />

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">

                <div class="post">
                    <PostTopo img="assets/img/meowed.svg"
                        usuario="meowed"
                        ion="ellipsis-horizontal" />

                    <PostConteudo img="assets/img/gato-telefone.svg" />

                    <PostFundo
                        ion1="heart-outline"
                        ion2="chatbubble-outline"
                        ion3="paper-plane-outline"
                        ion4="bookmark-outline"

                        img="assets/img/respondeai.svg"
                        texto1="respondeai"
                        texto2="101.523 pessoas"
                    />
                </div>

                <div class="post">
                    <PostTopo img="assets/img/barked.svg"
                        usuario="barked"
                        ion="ellipsis-horizontal" />

                    <PostConteudo img="assets/img/dog.svg" />

                    <PostFundo
                        ion1="heart-outline"
                        ion2="chatbubble-outline"
                        ion3="paper-plane-outline"
                        ion4="bookmark-outline"

                        img="assets/img/respondeai.svg"
                        texto1="adorable_animals"
                        texto2="outras 99.159 pessoas"
                    />
                </div>

            </div>
        </div>

    )

}

function Stories(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">{props.usuario}</div>
        </div>
    )
}

function PostTopo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.img} />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name={props.ion}></ion-icon>
            </div>
        </div>
    )
}

function PostConteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.img} />
        </div>
    )
}

function PostFundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name={props.ion1}></ion-icon>
                    <ion-icon name={props.ion2}></ion-icon>
                    <ion-icon name={props.ion3}></ion-icon>
                </div>
                <div>
                    <ion-icon name={props.ion4}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.img} />
                <div class="texto">Curtido por <strong>{props.texto1}</strong> e <strong>{props.texto2}</strong></div>
            </div>
        </div>
    )
}

