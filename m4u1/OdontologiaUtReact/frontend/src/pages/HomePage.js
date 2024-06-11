import React from "react";
const HomePage = (props) => {

    return(
        <main className="holder">

<div className="inicio">
        <div>
            <img className="imageninicio" src="img/inicio.jpg" width="400px" alt="inicio" />
        </div>

        <div className="presentacion">
            <h2>Lo que buscas...</h2>
            <p>Te ayudamos a conseguir y mantener la salud bucal que siempre deseaste.
                Nuestra prioridad es resolver los problemas existentes, ya que una boca sana mejora tu
                calidad de vida. Trabajamos con tecnología innovadora para garantizar un tratamiento
                exitoso.</p>
        </div>
    </div>


        </main>
    );
}

export default HomePage;