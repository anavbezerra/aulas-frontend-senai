import './BotaoCustomizado.css';

const BotaoCustomizado = (props) => {
    const classe = ["botao-customizado"];

    switch(props.tipo){
        case "primario":
            classe.push("botao-customizado-primario");
            break;
            case "secundario":
            classe.push("botao-customizado-secundario");
            break;
    }
    

    return <button className={classe.join(" ")}>{props.children}</button>;

};

export default BotaoCustomizado;