import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar mt-0 pt-0">
        <div className="logo">
            <li><a href="#home">LOGO</a></li>
        </div>
        <ul className="itens-menu">
          <li><a href="#about">ANTARCTICA</a></li>
          <li><a href="#services">Pesquisas Científicas</a></li>
          <li><a href="">Busca Geral</a></li>
          <li><a href="#contact">?</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  