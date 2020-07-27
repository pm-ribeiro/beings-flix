import React from 'react';
import Logo from '../../assets/logo/logo_red.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink';


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
      <img src={Logo} alt="Beings Flix" className="Logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>

    </nav>
  )
}

export default Menu;