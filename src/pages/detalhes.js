import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';


const filmes = [
    {
      "nome": "Vingadores",
      "genero": " Ação/Nerd",
      "sinopse": " Os maiores heróis da Terra se reúnem para enfrentar uma ameaça alienígena que ameaça a cidade de Nova York.",
      "descricao": " O filme Vingadores é um marco no universo cinematográfico da Marvel. Nele, os maiores heróis da Terra - Homem de Ferro, Thor, Capitão América, Hulk, Viúva Negra e Gavião Arqueiro - se unem para enfrentar uma ameaça alienígena liderada pelo vilão Loki. Com muita ação, efeitos especiais e cenas épicas, o filme conquistou o coração dos fãs de quadrinhos e se tornou um sucesso de bilheteria.",
      "nota": 8.5
    },
    {
      "nome": "Vingadores 2: Era de Ultron",
      "genero": " Ação/Nerd",
      "sinopse": " Os Vingadores precisam enfrentar um vilão robótico que busca a extinção da raça humana.",
      "descricao": " Em Vingadores 2: Era de Ultron, a equipe precisa enfrentar um vilão robótico chamado Ultron, criado por Tony Stark em uma tentativa de proteger a Terra. Mas Ultron, que possui inteligência artificial, começa a ver a humanidade como uma ameaça e decide que a única forma de proteger o planeta é eliminando os seres humanos. Com uma trama envolvente, muita ação e novos personagens, como Visão e Feiticeira Escarlate, o filme é uma ótima opção para os fãs de super-heróis.",
      "nota": 7.8
    },
    {
      "nome": "Vingadores: Guerra Infinita",
      "genero": " Ação/Nerd",
      "sinopse": " Os Vingadores se unem aos Guardiões da Galáxia para enfrentar o poderoso vilão Thanos em uma batalha épica pelo destino do universo.",
      "descricao": " Em Vingadores: Guerra Infinita, os heróis da Terra se unem aos Guardiões da Galáxia para enfrentar o poderoso vilão Thanos, que busca reunir as seis Joias do Infinito para obter um poder imensurável. A batalha épica pelo destino do universo leva os heróis a enfrentarem diversas situações de perigo e sacrifício, em uma trama emocionante que prende a atenção do espectador até o final. Com uma das maiores bilheterias da história do cinema, o filme é um dos maiores sucessos do universo cinematográfico da Marvel.",
      "nota": 9.2
    }
  ]
  

function Detalhes() {
    const { filme } = useParams();
  
    let filmeDescricao, filmeGenero, filmeNota, filmeSinopse,filmeNome;
  
    if (filme === 'Vingadores') {
      filmeDescricao = filmes[0].descricao;
      filmeGenero = filmes[0].genero;
      filmeNota = filmes[0].nota;
        filmeSinopse = filmes[0].sinopse;
        filmeNome = filmes[0].nome;

    } else if (filme === 'Vingadores 2') {
      filmeDescricao = filmes[1].descricao;
      filmeGenero = filmes[1].genero;
        filmeNota = filmes[1].nota;
        filmeSinopse = filmes[1].sinopse;
        filmeNome = filmes[1].nome;
    } else {
      filmeDescricao = filmes[2].descricao;
      filmeGenero = filmes[2].genero;
        filmeNota = filmes[2].nota;
        filmeSinopse = filmes[2].sinopse;
        filmeNome = filmes[2].nome;
    }
  
    return (
       <div>
        <Title nome="Detalhes" />
        
        <div className="container d-flex justify-content-center align-items-center">
        
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{filmeNome}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Nota :{filmeNota}</h6>
            <p className="card-text">Sinopse :{filmeSinopse}</p>
            <p className="card-text">Descrição : {filmeDescricao}</p>
            <p className="card-text">{'Gênero : '+filmeGenero}</p>
          </div>
        </div>
      </div>
        </div>
    );
  }
  
  export default Detalhes;