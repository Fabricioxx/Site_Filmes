import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';



const filmes = [
    {
      "nome": "Vingadores",
      "genero": "Ação/Nerd",
      "descricao": "Os Vingadores se reúnem para impedir um ataque alienígena em Nova York.",
      "nota": 8.5
    },
    {
      "nome": "Vingadores 2",
      "genero": "Ação/Nerd",
      "descricao": "Os Vingadores precisam enfrentar o vilão Ultron, que busca a extinção da raça humana.",
      "nota": 7.8
    },
    {
      "nome": "Vingadores 3",
      "genero": "Ação/Nerd",
      "descricao": "Os Vingadores se juntam aos Guardiões da Galáxia para enfrentar Thanos em uma batalha épica pelo destino do universo.",
      "nota": 9.2
    }
  ]

function Detalhes() {
    const { filme } = useParams();
  
    let filmeDescricao, filmeGenero;
  
    if (filme === 'Vingadores') {
      filmeDescricao = filmes[0].descricao;
      filmeGenero = filmes[0].genero;
    } else if (filme === 'Vingadores 2') {
      filmeDescricao = filmes[1].descricao;
      filmeGenero = filmes[1].genero;
    } else {
      filmeDescricao = filmes[2].descricao;
      filmeGenero = filmes[2].genero;
    }
  
    return (
       <div>
        <Title nome="Detalhes" />
        
        <div className="container d-flex justify-content-center align-items-center">
        
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{filme}</h5>
            <p className="card-text">{filmeDescricao}</p>
            <p className="card-text">{filmeGenero}</p>
          </div>
        </div>
      </div>
        </div>
    );
  }
  
  export default Detalhes;