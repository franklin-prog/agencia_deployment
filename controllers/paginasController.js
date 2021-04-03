
import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => {

    try{

        //definir el modelo y traer tres registros

        const promiseDB = [];

        promiseDB.push(Viaje.findAll({ limit : 3}));
        promiseDB.push(Testimonial.findAll({ limit : 3 }));

        const resultado = await Promise.all(promiseDB)

        res.render("inicio", {
            pagina : "Inicio",
            clase : 'home',
            viajes : resultado[0],
            testimoniales : resultado[1]

        })
    }
    catch(error){

    }
}

const paginaNosotros =  (req, res) =>{
    res.render("nosotros", {
        pagina : "Nosotros"
    })
}


const paginatestimoniales =  async (req, res) =>{

    // consultar la bbdd Testimoniales
    try{

        const testimoniales = await Testimonial.findAll();

        res.render("testimoniales", {
            pagina : "Testimoniales",
            testimoniales
        })

    }

    catch (error){

    }
}

const paginaViajes =  async (req, res) =>{

    const viajes = await Viaje.findAll();


    res.render("viajes", {
        pagina : "Proximos Viajes",
        viajes
    })
}

const paginaDetalleViaje = async (req, res) =>{


    //aplicando destructuracion

    const { viaje } = req.params;

    try {

        const resultado = await Viaje.findOne({where : { slug: viaje } })


        res.render("viaje", {
            pagina : "Informacion Viaje",
            resultado
        })

    } catch (error){
        console.log(error);

    }

    }

export{
    paginaViajes,
    paginatestimoniales,
    paginaNosotros,
    paginaInicio,
    paginaDetalleViaje
}

