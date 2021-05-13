import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../helpers/formatCurrency';

const TotalSales = () => {
    const [total, setTotal] = useState(0)
    const { movements, title } = useSelector(state => state.global)


    useEffect(()=>{     
        const totalSum =  formatCurrency( 'es-CO', 'COP', 0, sum(movements));
        setTotal(totalSum)
    },[movements]);

    const sum = (movements) => {
        let sum = 0;
        movements.map((item)=>{
            sum = sum + parseInt(item.amount);
        });

        return sum;
    }


    return (
        <div className="TotalSales pb-4">
            <div className="TotalSales__title dc_flex_row p-3">
                <span className="p-0">Total de ventas de { title }</span>
                <i className="fas fa-exclamation"></i>
            </div>
            <div className="TotalSales__value text-center pt-2">
                {total}
            </div>
            <div className="TotalSales__date text-center">
                Septiembre 2020
            </div>
        </div>
    )
}

export default TotalSales
