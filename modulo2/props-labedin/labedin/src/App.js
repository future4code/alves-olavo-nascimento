import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './components/img/praia.jpeg'
import emprego1 from './components/img/ferkoda.jpg'
import emprego2 from './components/img/driveway.jpg'
import email from './components/img/email.png'
import local from './components/img/local.png'
import seta from './components/img/seta.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Olavo" 
          descricao="Oi, eu sou o Olavo. Sou o estudante Labenu. Gosto muito de vídeo games e curto muito tecnologia, um cineminha sempre cai bem."
        />
        
        <ImagemButton 
          imagem={seta}
          texto="Ver mais"
          
        />

        <CardPequeno
          imagem={email}
          texto="E-mail:"
          descricao=" omarquesdonascimento@gmail.com"
        />
        
        <CardPequeno
          imagem={local}
          texto="Endereço:"
          descricao=" Rua riacho dos mosquidos grandes"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={emprego1}
          nome="Ferkoda" 
          descricao="Fabricando peças de fogão e alguns componentes bélicos." 
        />
        
        <CardGrande 
          imagem={emprego2}
          nome="Driveway" 
          descricao="Fabricando terminais de barra e pivôs de suspenção de carros." 
          
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
