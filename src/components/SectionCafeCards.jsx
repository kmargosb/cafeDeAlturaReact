import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import arrow from '../images/ArrowNarrowRight.png'
import CafeCard from './CafeCard'

const SectionCafeCards = () => {

    const [cafeData, setCafeData] = useState(null);
    const linkApi = "https://cafe-de-altura.vercel.app/api/products";

    useEffect(() => {
        const getData = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCafeData(data.products)
                console.log(data.products)
            } catch (error) {
                console.log(error);
            }
        };
        getData(linkApi);
    }, [linkApi]);

    if (!cafeData) {
        return <div className='flex justify-center items-center h-[606.6px] text-black text-2xl'>Cargando...</div>;
    }

    return (
        <div className='font-outfit flex flex-col gap-10 justify-center items-center p-10'>
            <h2 className='font-medium text-[24px] leading-7'>Novedades</h2>
            <div className='flex gap-6 w-[1200px]'>
                {cafeData.splice(0,4).map((data,i) => {
                    return(
                        <CafeCard key={i} price={data.price} name={data.brand} available={data.available} img={data.img_url} id={data._id} />
                    )
                })}
            </div>
            <Link to="/shop" className='flex gap-4 items-center justify-center'>
                <p className='text-[14px] font-semibold border-b border-black'>Ver todos</p>
                <img src={arrow} alt="icon" />
            </Link>
        </div>
    )
}

export default SectionCafeCards