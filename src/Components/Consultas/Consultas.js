import React, { Component } from 'react';

class Consultas extends Component {
    constructor(props){
        super(props);
        this.state = {
            realizadas : [],
            marcadas : []
    };
}

componentDidMount() {
    fetch("http://www.devup.com.br/php/api-dashboard/api/consultas")
    .then(resultado => resultado.json().then(dados => this.setState(dados)))
    .catch(erro => console.log(erro));

}
    render() {
        return(
            <div className="mb-2">
   <h2 className="mt-2 text-center">Consultas</h2>

<div className="row mx-2">
    <div className="col">
        <div className="card mt-2">
            <div className="card-header text-center">
                Realizadas
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Especialidade</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     this.state.realizadas.map((item, indice) => {
                      return (
                       <tr key={indice}>
                         <td>{item.especialidade}</td>
                         <td>{item.quantidade}</td>
                       </tr>
                       )
                     })
                    }
                </tbody>
            </table>
        </div>
    </div>
    <div className="col">
        <div className="card mt-2">
            <div className="card-header text-center">
                Marcadas
            </div>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Especialidade</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
             {
              this.state.marcadas.map((item, indice) => {
               return (
                 <tr key={indice}>
                   <td>{item.especialidade}</td>
                   <td>{item.quantidade}</td>
                 </tr>
               )
              })
             }
            </tbody>
        </table>
        </div>
    </div>
</div>
</div>              
   
        )
    }
}

export default Consultas;