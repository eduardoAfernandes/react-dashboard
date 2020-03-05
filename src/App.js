import React from 'react';
import './App.css';

// Importando componente Menu Superior para renderiza-lo na pagina
import MenuSuperior from './Components/MenuSuperior/MenuSuperior';
import Resumo from './Components/Resumo/Resumo'

function App() {
    return (
     <div>
       <MenuSuperior/>
       <Resumo/>
     </div>
  );

}

export default App;
