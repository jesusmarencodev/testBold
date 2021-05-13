import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Resume from './components/resumen/Resume';
import TableData from './components/TableData/TableData';
import { store } from './store/store';



import './styles/index.scss';

const App = () => {
  
  return (
    <Provider store={store}>
      <div className="generalbg">
        <Header/>
        <Resume/>
        <TableData/> 
      </div>
    </Provider>
    
  )
}

export default App
