import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <img
      src="https://s.tmimgcdn.com/scr/800x500/338300/vetor-do-logotipo-do-museu-vetor-do-logotipo-do-museu_338325-original.jpg"
      alt="Logo do meu site"
      className="logo"
    />
    {/* Título principal do site  */}
    <h1>Museus para conhecer</h1>
  </header>
);

export default Header;
