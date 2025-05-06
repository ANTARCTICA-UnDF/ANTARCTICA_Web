import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar mt-0 pt-0">
      <div className="logo">
        <li>
          <a href="#home">
            <img src="src/assets/imagem/logo.png" alt="logo ANTARCTICA" />
          </a>
        </li>
      </div>
      <ul className="itens-menu">
        <li><a href="#3sobre">ANTARCTICA</a></li>
        <li><a href="#pesquisas">Pesquisas Científicas</a></li>
        <li className="busca-geral">
  <a href="#busca">
    <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24" width="20" fill="#71AEFF">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 
      6.5 6.5 0 109.5 16c1.61 0 3.09-.59 
      4.23-1.57l.27.28v.79l5 4.99L20.49 
      19l-4.99-5zm-6 0C8.01 14 6 11.99 
      6 9.5S8.01 5 10.5 5 15 7.01 15 
      9.5 12.99 14 10.5 14z"/>
    </svg>
    <span className="texto-busca">Busca Geral</span>
  </a>
</li>
        <li><a href="#contact"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4D4D4D"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
