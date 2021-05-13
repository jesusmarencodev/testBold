import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { starGetData, activeData, changeTitleTable } from '../../actions/generalAction';



const Filters = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        datafono: false,
        linkPagos: false,
        todos: false,
    });

    const onChange = ({ target }) => {
        const { name, checked } = target;
        setForm({
            ...form,
            [name]: checked
        });
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();
        let resp        = await dispatch(starGetData());

        let datafono    = (form.datafono)  ? 'datafono' : ''
        let linkPagos   = (form.linkPagos) ? 'link' : ''
        let filter      = [];
        

        if(form.todos || (!form.datafono && !form.linkPagos && !form.todos)){
            filter = await dispatch(starGetData());
        }else{
            if(form.datafono && !form.linkPagos ){
                filter  = resp.filter((item => item.type === datafono))
                console.log("1")
                dispatch(activeData(filter));
            }
            if(!form.datafono && form.linkPagos ){
                filter  = resp.filter((item => item.type === linkPagos))
                await dispatch(activeData(filter));
            }
            if( form.datafono && form.linkPagos ){
                console.log("paso4")
                filter = await dispatch(starGetData());
            }
        }
    
        sessionStorage.setItem('list', JSON.stringify(filter));
    }

    const getOrders = async (option, id_element) => {
        const element = document.querySelector('.Flotante');
        element.classList.remove('d-none');
        selectButton(id_element);
        dispatch(changeTitleTable(option))
    }
    const hideElement = () => {
        const element = document.querySelector('.Flotante');
        element.classList.add('d-none');
    }

    const selectButton = (id) => {
        const elemets = document.querySelectorAll('.btn');

        for (let index = 0; index < elemets.length; index++) { 
            elemets[index].classList.remove('btn_active');
            elemets[index].classList.add('btn_filter');
        }
       
        const button = document.querySelector(`#${id}`);
        button.classList.remove('btn_filter');
        button.classList.add('btn_active');
    }

 

    return (
        <>
            <div className="Filters dc_flex_row dc_flex-center">
                <button id="btn_a" className="btn btn_filter" onClick={() => getOrders('Hoy', 'btn_a')} >Hoy</button>
                <button id="btn_b" className="btn btn_filter" onClick={() => getOrders('Semana', 'btn_b')}>
                    <span className="d-none d-lg-inline-block">Esta </span> semana
                </button>
                <button id="btn_c" className="btn btn_filter" onClick={() => getOrders('Septiembre', 'btn_c')}>Septiembre</button>
            </div>

            <div className="Flotante d-none mt-3 pt-2 ">
                <p className="text-center">Filtrar</p>
                <i className="fas fa-times c-pointer" onClick={hideElement}></i>

                <div className="">
                    <form onSubmit={onSubmit}>
                        <div className="form-group form-check">
                            <input 
                                name="datafono"
                                onChange={onChange}
                                type="checkbox"
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="datafono">Cobro datáfono</label>
                        </div>
                        <div className="form-group form-check">
                            <input 
                                name="linkPagos"
                                checked={form.linkPagos}
                                onChange={onChange}
                                type="checkbox"
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="linkPagos">Cobros con link de pago</label>
                        </div>
                        <div className="form-group form-check">
                            <input 
                                name="todos"
                                checked={form.todos}
                                onChange={onChange}
                                type="checkbox"
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="todos">Ver todos</label>
                        </div>

                        <div className="text-center pb-3">
                            <button className="btn btn_filter_submit " type="submit">Aplicar</button>
                        </div>
                    </form>



                </div>
            </div>
        </>
    )
}

export default Filters;
