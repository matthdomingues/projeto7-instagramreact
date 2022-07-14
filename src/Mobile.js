export default function Mobile() {
    return (
        <div class="fundo-mobile">
            <Ion name="home" />
            <Ion name="search-outline" />
            <Ion name="add-circle-outline" />
            <Ion name="heart-outline" />
            <Ion name="person-outline" />
        </div>
    )
}

function Ion(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}