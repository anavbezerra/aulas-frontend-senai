import './NovoAvatar.css';

const NovoAvatar = (props) => {
    const [nome, sobrenome] = props.nome.split(' ');

    return <div className="novoavatar"> {nome[0] + sobrenome[0]}</div>;
}

export default NovoAvatar;
