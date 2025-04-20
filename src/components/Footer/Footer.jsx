import './Footer.css';

function Footer(){
    return (
        <footer className="footer">
            <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} ANTARCTICA • UnDF.</p>
            <p>Projeto acadêmico desenvolvido com fins educacionais. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;