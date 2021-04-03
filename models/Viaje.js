import sequelize from 'sequelize'
import db from '../config/db.js'

export const Viaje = db.define('viajes', {

    pais: {
        type: sequelize.STRING
    },
    precio: {
        type: sequelize.STRING
    },
    imagen: {
        type: sequelize.STRING
    },
    fecha_ida: {
        type: sequelize.STRING
    },
    fecha_vuelta: {
        type: sequelize.STRING
    },
    disponible: {
        type: sequelize.INTEGER
    },
    descripcion: {
        type: sequelize.STRING
    },
    slug: {
        type: sequelize.STRING
    }
})

