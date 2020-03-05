import React, { Component } from 'react';

class Resumo extends Component {
    // Definindo o formato dos dados internos do componente(Dados que ele exibira na tela)
    constructor(props){
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
    
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Resumo;