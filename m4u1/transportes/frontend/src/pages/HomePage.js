import React from "react";
import 'C:/Users/ricardog/Desktop/Diplo_martes/m4u1/transportes/frontend/src/styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">

                <img src="img/home/img01.jpg" alt="avion" />
            </div>

            <div className="columnas"> <div>
                <h2> Bienvenidos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptates sapiente non quis? Nostrum sequi dolore provident asperiores vel suscipit beatae nulla tenetur et officiis
                    exercitationem, neque assumenda excepturi eligendi numquam!
                </p>
            </div>

                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;