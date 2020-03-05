import React, { Component } from 'react';

class Resumo extends Component {
    // Definindo o formato dos dados internos do componente(Dados que ele exibira na tela)
    constructor(props) {
        super(props);
        //Definindo os dados internos do componente(ou seja, definindo seu estado)
        // Propriedades são recebidas externamente 
        // Estado representa os dados que ele manipula internamente 
        this.state = {
            consultas: {
                consultas_30dias_anteiores: 0,
                consultas_30dias_posteriores: 0
            },
            faturamento: {
                anterior: {
                    valor: 0,
                    comparativo: 0
                },
                previsao: {
                    valor: 0,
                    comparativo: 0
                }
            }
        }
    }

    componentDidMount(){
        fetch("http://www.devup.com.br/php/api-dashboard/api/resumo")
        .then(resultado => resultado.json().then(
            dados => this.setState(dados))
            )
            .catch(dados => console.log(dados));
    }
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 text-center my-2  border-bottom">Resumo</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="col-12">
                            <h2 className="h2 text-center my-2">Consultas</h2>
                        </div>
                        <div className="row mx-1">

                            <div className="col-6">

                                <div class="card">
                                    <div class="card-header text-center">
                                        30 dias anteriores
                                 </div>
                                    <div class="card-body text-center">
                                        {
                                            this.state
                                                .consultas
                                                .consultas_30dias_anteiores
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">

                                <div class="card">
                                    <div class="card-header text-center">
                                        Próximos 30 dias
                                 </div>
                                    <div class="card-body text-center">
                                        {
                                            this.state
                                                .consultas
                                                .consultas_30dias_posteriores
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="col-12">
                            <h2 className="h2 text-center my-2">Faturamento</h2>
                        </div>
                        <div className="row mx-1">

                            <div className="col-6">

                                <div className="card  text-center">
                                    <div className="card-header">
                                        30 dias anteriores
     </div>
                                    <div className="card-body">
                                        {
                                            this.state.faturamento.anterior
                                                .valor.toLocaleString("pt-BR",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL"
                                                    })
                                        }
                                        <span className="badge ml-1 badge-danger">
                                            {
                                                this.state.faturamento.anterior
                                                    .comparativo
                                            } %
       </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">

                                <div className="card  text-center">
                                    <div className="card-header">
                                        Próximos 30 dias     </div>
                                    <div className="card-body">
                                        {
                                            this.state.faturamento.anterior
                                                .valor.toLocaleString("pt-BR",
                                                    {
                                                        style: "currency",
                                                        currency: "BRL"
                                                    })
                                        }
                                        <span className="badge ml-1 badge-danger">
                                            {
                                                this.state.faturamento.previsao
                                                    .comparativo
                                            } %
       </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resumo;