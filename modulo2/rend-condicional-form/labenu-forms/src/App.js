import './App.css';
import React from 'react';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';



class App extends React.Component {
   
  state = {
    etapa: 1
  }
  
  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1 />
        break
      case 2:
        return <Etapa2 />
        break
      case 3:
        return <Etapa3 />
        break
      case 4:
        return <Final />
        break
    }
  }

  irParaProximaEtapa = () => {
    
  }

  render() {

    return (
      <div>
        <Etapa1 />
        <Etapa2 />
        <Etapa3/>
        <Final/>
        {/* {this.renderizaEtapa}
        <button>Próxima etapa</button> */}
      </div>
    );
  }
}
export default App;



