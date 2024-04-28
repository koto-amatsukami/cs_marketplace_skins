import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Menu from './components/menu'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
