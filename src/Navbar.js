export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Ion name="logo-instagram" />
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <Ion name="logo-instagram" />
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <Ion name="paper-plane-outline" />
                    <Ion name="compass-outline" />
                    <Ion name="heart-outline" />
                    <Ion name="person-outline" />
                </div>

                <div class="icones-mobile">
                    <Ion name="paper-plane-outline" />
                </div>
            </div>
        </div>
    )
}

function Ion(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}
