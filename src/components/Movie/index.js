import "./Movie.css";

// filmes é um array de objetos que contém os dados dos filmes que serão exibidos na tela
// substituir esse array por um array vazio [] e fazer a requisição para a API
const filmes = [{
  "nome": "Vingadores",
  "duracao": "2H30",
  "foto": "vingadores.png",
  "ano": 2010,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Vingadores 2",
  "duracao": "2H30",
  "foto": "vingadores.png",
  "ano": 2014,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Vingadores 3",
  "duracao": "2H30",
  "foto": "vingadores.png",
  "ano": 2015,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
}
]

// componente Movie que será exibido na tela (é um componente funcional)
export default function Movie() {
  return (
    <div className="container text-center">
      <div class="row">

        {/* map é um método que percorre o array de objetos e retorna um novo array com os dados que foram mapeados */}
        {/* o map precisa de um parâmetro que é o item que está sendo percorrido no array */}
        {/* o map precisa de um segundo parâmetro que é o índice do item que está sendo percorrido no array */}
        {/* o map vai executar ate a quantidade de objetos igual um FOR e exibir o html na tela com os dados do objeto que esta na vez */}
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
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