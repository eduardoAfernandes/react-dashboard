import React from 'react';
import './App.css';

// Importando componente Menu Superior para renderiza-lo na pagina
import MenuSuperior from './Components/MenuSuperior/MenuSuperior';
import Resumo from './Components/Resumo/Resumo';
import Consultas from './Components/Consultas/Consultas';
import Faturamento from './Components/Faturamento/Faturamento';

// Rotas
import { Switch, Route } from 'react-router-dom';


function App() {
    return (
     <div>
       <MenuSuperior/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
 {/* Deixar as rotas mais genericas por ultimo para o Switch fazer as validações nas primeiras 
              <Route path="/consultas" component={Consultas}/>
                 <Route path="/faturamento" component={Faturamento}/>
                 <Route path="/" component={Resumo}/>             */}

                 {/* Ou usar o exact */}
                 <Route path="/" exact component={Resumo}/>   
                 <Route path="/consultas" exact component={Consultas}/>
                 <Route path="/faturamento" exact component={Faturamento}/>                                           
                 {/* Pegando qualquer url que nao exista */}
                 <Route path="*"  component={Resumo}/> 

              </Switch>
            </div>
          </div>
        </div>
     </div>
  );

}

export default App;
