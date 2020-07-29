import React from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateBase';

function CadastroVideo() {
  return (
    <TemplateDefault>
      <h1>Cadastro de videos</h1>
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </TemplateDefault>
  )
}

export default CadastroVideo;