import React from "react";
const ContactoPage = (props) => {

    return(
        <main className="holder contacto">
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
            <input type="text" name=""/>
        </p>
        <p>
            <label for="telefono">Telefono</label>
            <input type="text" name=""/>
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
        <a href="https://www.facebook.com/"> <img class="imagenredes" src="IMAGENES/facebook.png"
                alt="facebook"/></a>

        <a href="https://www.whatsapp.com/"><img class="imagenredes" src="IMAGENES/whatsapp.png"
                alt="whatsapp"/></a>

        <a href="https://www.instagram.com/"><img class="imagenredes" src="IMAGENES/instagram.jpg"
                alt="instagram"/></a>


    </li>

    </ul>
</div>


    </main>

  
    
    
    );
}

export default ContactoPage;