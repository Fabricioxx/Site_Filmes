import "./Title.css";

// função que retorna o que será exibido na tela (Title é o componente principal)
export default function Title() {
    return (

        // usando o bootstrap para criar um título na tela (https://getbootstrap.com/docs/4.0/examples/pricing/)
        <div class="container">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Pricing</h1>
                <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
            </div>
        </div>
    )
}