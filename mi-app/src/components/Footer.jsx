import React from 'react';
import './Footer.css';
import logoTerraNova from '../img/logo.footer.jpeg';

export default function Footer({ cambiarPagina }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-brand">
          <button 
            onClick={() => cambiarPagina && cambiarPagina('inicio')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
          >
            <img
              src={logoTerraNova}
              alt="Terra Nova - Venta de Terrenos"
              className="footer-logo-img"
            />
          </button>
          <p>Desarrollo inmobiliario y venta de terrenos.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li>
              <button 
                onClick={() => cambiarPagina && cambiarPagina('inicio')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0, textAlign: 'left' }}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => cambiarPagina && cambiarPagina('proyecto')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0, textAlign: 'left' }}
              >
                Proyecto
              </button>
            </li>
            <li>
              <button 
                onClick={() => cambiarPagina && cambiarPagina('acerca')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0, textAlign: 'left' }}
              >
                Acerca de nosotros
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#facebook" onClick={(e) => e.preventDefault()} aria-label="Facebook">Facebook</a>
            <a href="#instagram" onClick={(e) => e.preventDefault()} aria-label="Instagram">Instagram</a>
            <a href="#whatsapp" onClick={(e) => e.preventDefault()} aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Terra Nova - Venta de Terrenos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}