import React from 'react';
import './App.css';

// Importando componente Menu Superior para renderiza-lo na pagina
import MenuSuperior from './Components/MenuSuperior/MenuSuperior';
import Resumo from './Components/Resumo/Resumo'
import Consultas from './Components/Consultas/Consultas'
import Faturamento from './Components/Faturamento/Faturamento'


function App() {
    return (
     <div>
       <MenuSuperior/>
       <Resumo/>
       <Consultas/>
       <Faturamento/>
     </div>
  );

}

export default App;
