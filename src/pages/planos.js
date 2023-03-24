import React from 'react';
import Title from '../components/Title';


const planos = [
    {
      nome: "Plano Básico",
      preco: 9.99,
      foto: "planos.jpg",
      detalhes: "Acesso ilimitado a filmes e séries em qualidade SD, sem anúncios, e possibilidade de baixar conteúdo para assistir offline.",
    },
    {
      nome: "Plano Premium",
      preco: 19.99,
      foto: "planos.jpg",
      detalhes: "Acesso ilimitado a filmes e séries em qualidade HD, sem anúncios, possibilidade de baixar conteúdo para assistir offline, e conteúdo exclusivo e lançamentos antecipados.",
    },
    {
      nome: "Plano Família",
      preco: 29.99,
      foto: "planos.jpg",
      detalhes: "Acesso ilimitado a filmes e séries em qualidade HD, sem anúncios, possibilidade de baixar conteúdo para assistir offline, conteúdo exclusivo e lançamentos antecipados, e possibilidade de compartilhar a assinatura com até 4 usuários.",
    },
  ]



 
function Planos(){
    return (
        

  
        
        <div className="container text-center">
            <Title nome="Planos" />
        <div class="row">
  
          {planos.map((plano, i) => (
            <div className="col" key={i}>
              <div className="card">
                <img src={'/assets/images/' + plano.foto} alt={plano.nome} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{plano.nome} </h5>
                  <p className="card-text">{plano.detalhes}</p>
                  <p>R$ {plano.preco.toLocaleString('pt-BR')}</p>

                  <a href={`/detalhes/${plano.nome}`} >
                    <div className="btn btn-primary">
                      Adquirir
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
  
          {/* fim do map ------------------------*/}
  
        </div>
      </div>
    )   
}
 
export default Planos;