import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import ListaProdutos from '../ListaProdutos/ListaProdutos';

import './Principal.css';

const Principal = () => {
  return (
  <main>
    <BotaoCustomizado tipo="primario" onClick={() => {
      alert('Salvo com sucesso');
    }} >Salvar</BotaoCustomizado> 

    <BotaoCustomizado tipo="secundario">Excluir</BotaoCustomizado>

    <BotaoCustomizado
    onClik={() =>{
      alert('Cancelou tudo');
    }}>Cancelar</BotaoCustomizado>

    <ListaProdutos/>
    
    </main>
  );
};

export default Principal;

