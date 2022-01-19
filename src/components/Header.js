import "./Header.css";

export function Header({ scrolled }) {
  return (
    <header className={scrolled ? "scrolled" : null}>
      <div className="logo">
        <span>LOGO</span>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
