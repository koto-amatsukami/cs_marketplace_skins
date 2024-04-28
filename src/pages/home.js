import React from 'react';
import '../styles/home.css'; // Importa o arquivo de estilos CSS

function Home() {
  return (
    <div className="container">
      <h2>CS:GO Skins</h2>
      <div className="grid">
        {/* Adicionando imagens das skins */}
        <div className="item">
          <img src="https://skin.land/market_images/14638_s.png" alt="Skin 1" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/141374_s.png" alt="Skin 2" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/139386_s.png" alt="Skin 3" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/141428_s.png" alt="Skin 4" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/149214_s.png" alt="Skin 5" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/38983_s.png" alt="Skin 6" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/38983_s.png" alt="Skin 7" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        <div className="item">
          <img src="https://skin.land/market_images/14638_s.png" alt="Skin 8" />
          <div className="overlay">
            <h3>Nome da Skin</h3>
          </div>
        </div>
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </div>
  );
}

export default Home;