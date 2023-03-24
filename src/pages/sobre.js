import React from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';


function Sobre() {
   const { name } = useParams();

  
    
    return (
              

           <div> 

<Title nome="Sobre a Empresa" />
 {/*<p  >Olá usuário {name.toUpperCase()}!</p>  */}   
    
<div className="container d-flex justify-content-center align-items-center">
        <div className="card-header">
        <img src={'/assets/images/logo2.jpg'} alt="Logo da Empresa" className="float-left img-thumbnail mr-3" style={{ maxWidth: '350px' }} />
        </div>
       <div className="card"  >
       <div className="card-body">
            <p>A nossa empresa de streaming de filmes foi fundada com o objetivo de oferecer aos nossos clientes uma ampla variedade de conteúdo audiovisual de alta qualidade. Desde então, temos trabalhado incansavelmente para inovar e melhorar a nossa plataforma, oferecendo sempre o melhor para atender às necessidades dos nossos clientes.</p>
            <p>Além disso, temos um forte compromisso com a sustentabilidade e o meio ambiente, e estamos constantemente buscando maneiras de reduzir o impacto das nossas operações no planeta. </p>
        </div>
        
    </div>
</div>
        </div>  
            

        
    )
}

export default Sobre;