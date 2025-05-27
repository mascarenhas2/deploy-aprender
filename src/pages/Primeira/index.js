// src/pages/Primeira/index.js (ou PaginaEntrada.js, conforme o nome correto)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function PaginaEntrada() {
  const navigate = useNavigate();

  const handleIrParaCadastro = () => {
    navigate('/usuarios'); // Agora redireciona para a página de cadastro
  };

  return (
    <div className="pagina-entrada">
      <h1>BID</h1>
      <h2>Esporte Clube Vitoria</h2>
      <button onClick={handleIrParaCadastro} className="botao-entrada">
        Ir para Cadastro
      </button>
    </div>
  );
}

export default PaginaEntrada;