import React from 'react'
import Card from './Card'
import check from '../images/Check.png'
import gift from '../images/Gift.png'
import truck from '../images/Truck.png'
import background from '../images/backgroundcafecards.jpeg'



const SectionCards = () => {
    const dataCards = [
        {
            textH3: "Recibe tu pedido sin preocuparte",
            textP: "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.",
            imagenSvg: `${check}`
        },
        {
            textH3: "Envío en 24/48h",
            textP: "Pide tu café antes de las 12h y lo recibirás al día siguiente.",
            imagenSvg: `${gift}`
        },
        {
            textH3: "Descuentos y beneficios",
            textP: "",
            imagenSvg: `${truck}`
        }
    ];

    return (
        <div className='flex flex-col gap-6 items-center w-full py-12 px-[147px] bg-red-200'>
            <h2 className='text-white font-medium text-[24px] leading-7'>Café con las mejores condiciones</h2>
            <div className='flex gap-6 w-[996px]'>
                
            {dataCards.map((data, i) => {
                return (
                    <Card key={i} textH3={data.textH3} textP={data.textP} imagenSvg={data.imagenSvg} />
                )
            })}
            </div>
        </div>
    )
}

export default SectionCards