import React from "react";
import 'C:/Users/ricardog/Desktop/Diplo_martes/m4u1/OdontologiaUtReact/frontend/src/styles/components/pages/ContactoPage.css';
const ContactoPage = (props) => {

    return (
        <body className="fondocontacto" >
            <main className="contacto">
                <div className="contenedorcontacto">
                    <div>
                        <h2>Contacto</h2>
                        <form action="" method="" className="formulario">
                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="" />
                            </p>
                            <p>
                                <label for="email">Email</label>
                                <input type="text" name="" />
                            </p>
                            <p>
                                <label for="telefono">Telefono</label>
                                <input type="text" name="" />
                            </p>
                            <p>
                                <label for="mensaje">Mensaje</label>
                                <textarea name=""></textarea>
                            </p>

                            <p><input type="submit" value="Enviar" />

                            </p>
                        </form>
                    </div>
                </div>

                <div className="direccion">
                    <h2>Encontranos</h2>
                    <ul>
                        <li>Dirección: Av. Acevedo 10000, CABA, Argentina
                        </li>
                        <li>Email: odontologiaut@com.ar
                        </li>
                        <li> Tel.: 011.4000-9000</li>
                        <li>
                            <a href="https://www.facebook.com/"> <img className="imagenredes" src="img/facebook.png"
                                alt="facebook" /></a>

                            <a href="https://www.whatsapp.com/"><img className="imagenredes" src="img/whatsapp.png"
                                alt="whatsapp" /></a>

                            <a href="https://www.instagram.com/"><img className="imagenredes" src="img/instagram.jpg"
                                alt="instagram" /></a>
                        </li>
                    </ul>
                </div>

            </main>
        </body>
    );
}

export default ContactoPage;