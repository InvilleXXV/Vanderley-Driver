import "./Navbar.css";
function Navbar() {
    return (
        <header>

            <div className="logo">
               
            <h1>VANDERLEY <span className="color-driver">DRIVER</span></h1>
            <h2>MOTORISTA PARTICULAR</h2>
            </div>

            <nav className="nav-links">
                <ul>
                    <li>
                    <a href="#home">Home</a>
                    </li>

                    <li>
                    <a href="#sobre">Sobre mim</a>
                    </li>
                    
                    <li>
                    <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>

            <button className="menu-button">
               ☰
            </button>

        </header>
    )
}

export default Navbar