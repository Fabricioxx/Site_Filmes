import React from 'react';
import Title from '../components/Title';


function Error() {
    return (
        
    <div className="container text-center">
      <Title nome="Página Não Encontrada!" />
      <img src="/assets/images/error404.jpg" alt="Erro 404 - Página não encontrada" className="img-fluid mt-5" />
    </div>
        
    )
}
export default Error;