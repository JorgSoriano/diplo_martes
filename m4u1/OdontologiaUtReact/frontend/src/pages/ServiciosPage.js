import React from "react";
const ServiciosPage = (props) => {

    return (
        <div className="contenedorservicios">

        <div>
            <h2>Odontologia general</h2>
            <p> Diagnóstico, prevención y tratamiento de las 
                enfermedades.</p><img src="img/ODONTOLOGIA.png" width="90px"
                alt="odontologia" />
        </div>
        <div>
            <h2>Implante</h2>
            <p> Tornillo de titanio que se coloca en el maxilar para reemplazar la raíz del diente perdido.</p> <img
                src="img/IMPLANTE.png" width="90px" alt="implante" />
        </div>
        <div>

            <h2>Ortodoncia y ortopedia</h2>
            <p>Ramas que se encargan de la corrección y guía de los dientes y huesos para una correcta posición.</p>
            <img src="img/ORTODONCIA.png" width="90px" alt="ortodoncia" />
        </div>
        <div>
            <h2> Blanqueamiento</h2>
            <p>Tratamiento que tiene como finalidad aclarar los dientes (disminuir el tono).</p><img
                src="img/BLANQUEAMIENTO.png" width="90px" alt="blanqueamiento" />
        </div>
        </div>


    );
}

export default ServiciosPage;