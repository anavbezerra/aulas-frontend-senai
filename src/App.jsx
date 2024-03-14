import'./App.css';
import Cabecalho from './assets/componentes/Cabecalho/Cabecalho';
import LadoEsquerdo from './assets/componentes/LadoEsquerdo/LadoEsquerdo';
import Rodape from './assets/componentes/Rodape/rodape';

function App() {
  console.log('app render...');
 

  return (
   <>
  <Cabecalho />
  <LadoEsquerdo/>
  <main></main>
  <Rodape/>
  
  </>
);
}

export default App
