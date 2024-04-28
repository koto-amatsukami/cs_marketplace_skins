import React from 'react';
import '../styles/footer.css'; // Importa o arquivo de estilos CSS

// Componente Footer
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CS:GO Skins. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;