import {Testimonial} from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {

    // validar los campos del formulario

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim() === ''){
        errores.push({mensaje : "El nombre esta vacío"})
    }

    if (correo.trim() === ''){
        errores.push({mensaje : "El correo esta vacío"})
    }

    if (mensaje.trim() === ''){
        errores.push({mensaje : "El mensaje esta vacío"})
    }

    if(errores.length > 0){

        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales",{
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
        
    } else{
        
        //Almacenar los valores ingresados por el usuario a través del formulario a la base de datos
        
        try {

            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect("/testimoniales");

        }

        catch (error){
            console.log(error)
        }

    }

}

export {
    guardarTestimonial
}
