import React from "react";
import '../styles/components/pages/ContactoPage.css';
const ContactoPage = (props) => {

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form className="formulario" action="" method="" >
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

                    <p className="acciones"><input type="submit" value="Enviar" />

                    </p>
                </form>
            </div>

            <div className="datos">
                <h2>Otras vias de comunación</h2>

                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 4342388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;