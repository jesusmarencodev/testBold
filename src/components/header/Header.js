import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeData, starGetData } from '../../actions/generalAction';


const Header = () => {

    const dispatch = useDispatch();
    const [listPersist] = useState( JSON.parse(sessionStorage.getItem('list')));

    useEffect(() => {
        if(listPersist){
            dispatch(activeData(listPersist));
        }else{
            dispatch(starGetData());
        }
    }, [dispatch, listPersist])

 

    return (
        <div className="Header">
            <div className="Header__spaicing container-md">
                <div className="Header__logo">
                    <img  src="./images/boldLogo.svg" alt="bold" />
                </div>
                <nav className="Header__nav">
                    <a  href="#!">Mi negocio</a>
                    <a  href="#!">
                        Ayuda 
                        <i className="far fa-question-circle"></i>
                    </a>
                    
                </nav>
            </div>
           
        </div>
    )
}

export default Header;
