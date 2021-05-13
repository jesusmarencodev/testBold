import React from 'react'
import {  useSelector } from 'react-redux'

import { formatCurrency } from '../../helpers/formatCurrency'

const TableData = () => {

    const { movements, title } = useSelector(state => state.global);
    
    



    return (
        <div className="TableData container-md mt-3">
            <div className="TableData__title dc_flex_row dc_flex-center">
                Tus Ventas de { title }
            </div>
            <div className="TableData__head">
                <ul >
                    <li className="TableData__head_title">
                        <span>
                            <span className="d-none d-md-block">Transacción</span>
                            <span className="d-block d-md-none">Trans</span>
                        </span>
                        <span>
                            <span className="d-none d-md-block">Fecha y hora</span>
                            <span className="d-block d-md-none">Fecha</span>
                        </span>
                        <span className="d-none d-md-block">              
                            <span>Método de pago</span>
                        </span>
                        <span className="d-none d-md-block">
                            <span>ID transacción Bold</span>
                        </span>
                        <span>Monto</span>
                    </li>


                    {movements.map((move, index) => (
                        <li key={move.id} className={`TableData__content ${(index % 2 === 0) ? 'flag_li' : 'flag_sec' }`}>
                            <span className="blueNumber d-none d-md-block">
                                {move.status ? 'Cobro exitoso'
                                             : 'Cobro no realizado'
                                }
                            </span>
                            <span className="blueNumber d-block d-md-none">
                                {move.status ? 'Ok'
                                             : 'No'
                                }
                            </span>
                            <span>{move.date}</span>
                            <span className="number_hide d-none d-md-block ">
                                <img width={20} src='./images/master.svg' alt={move.id} />
                                <span>**** **** **** {move.lastfourNumber}</span>
                            </span>
                            <span className="d-none d-md-block">{move.transactionId}</span>
                            <span>
                                <span className="blueNumber">
                                    { formatCurrency('es-CO', 'COP', 0, move.amount)   } 
                                </span>
                                <br/>
                                <span className="deductionBold">
                                    Deducción Bold
                                </span>
                                <br/>
                                <span className="deductionBoldNumber">
                                  -{ formatCurrency('es-CO', 'COP', 0, move.deduction)   } 
                                </span>
                               
                            </span>
                        </li>
                    ))

                    }
                    
                </ul>
            </div>

        </div>
    )
}

export default TableData
