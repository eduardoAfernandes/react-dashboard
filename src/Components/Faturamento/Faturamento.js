import React, { Component } from 'react';

class Faturamento extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detalhamento: []
        }
    }
    componentDidMount() {
        fetch("http://www.devup.com.br/php/api-dashboard/api/faturamento")
            .then(resultado => resultado.json().then(dados => this.setState(dados)))
            .catch(erro => console.log(erro));

    }
    render() {
        return (
            <div>
                <h2 className="mt-2 text-center">Faturamento</h2>
                <div className="col">
                    <div className="card mt-2">
                        <div className="card-header text-center">
                            Total faturado por forma de pagamento
            </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.detalhamento.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.descricao}</td>
                                                <td>{item.valor.toLocaleString("pt-BR",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL"
                                                    })}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }

}

export default Faturamento;