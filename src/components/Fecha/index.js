import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import axios from 'axios';


const Fecha = () => {
    const fecha = new Date();
    const diaDeHoy = dayjs(fecha).locale('es').format('DD/MM/YY')

    useEffect(() => {
        const fetchFecha = async () => {
            try {
                const response = await axios.get(`${diaDeHoy}`);
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchFecha()
    }, [diaDeHoy])


    return (
        <p> {diaDeHoy}</p>
    )

}

export default Fecha