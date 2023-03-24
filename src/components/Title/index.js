import "./Title.css";
import React from "react";


// função que retorna o que será exibido na tela (Title é o componente principal)
export default function Title(props) {
      
    return (

        // usando o bootstrap para criar um título na tela (https://getbootstrap.com/docs/4.0/examples/pricing/)
        <div class="container">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">{props.nome}</h1>
                
            </div>
        </div>
    )
}