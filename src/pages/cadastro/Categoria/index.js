import React from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../../components/TemplateBase';

function CadastroCategoria() {
  return (
    <TemplateDefault>
      <h1>Cadastro de Categorias</h1>
      <Link to="/">
        Ir para Home
      </Link>
    </TemplateDefault>
  )
}

export default CadastroCategoria;