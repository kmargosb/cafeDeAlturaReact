import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const SectionForm = () => {
    return (
        <div className='font-outfit flex justify-center bg-Taupe w-full'>
            <div className='flex justify-center items-center gap-6'>
                <div className='flex flex-col justify-center gap-8 w-[588px]'>
                    <div className='flex flex-col w-full gap-3'>
                        <h3 className='text-BlackP leading-6 text-[18px] font-semibold'>Entra en contacto con nosotros</h3>
                        <p className='text-[14px] leading-4 text-gray-500'>
                            Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos
                            lo antes posible.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6 text-[14px] leading-4 text-gray-500'>
                        <p className='h-[37px]'>
                            También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono
                            de la tienda.
                        </p>
                        <div className='text-[14px] leading-4 text-gray-500'>
                            <p>742 Evergreen Terrace</p>
                            <p>Springfield, OR 12345</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25"
                                    fill="none">
                                    <g id="Phone">
                                        <path id="Icon"
                                            d="M3 5.39258C3 4.28801 3.89543 3.39258 5 3.39258H8.27924C8.70967 3.39258 9.09181 3.66801 9.22792 4.07635L10.7257 8.56979C10.8831 9.0419 10.6694 9.55789 10.2243 9.78044L7.96701 10.9091C9.06925 13.3538 11.0388 15.3233 13.4835 16.4256L14.6121 14.1683C14.8347 13.7232 15.3507 13.5095 15.8228 13.6668L20.3162 15.1647C20.7246 15.3008 21 15.6829 21 16.1133V19.3926C21 20.4971 20.1046 21.3926 19 21.3926H18C9.71573 21.3926 3 14.6768 3 6.39258V5.39258Z"
                                            stroke="#6B7280" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                </svg>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25"
                                    fill="none">
                                    <path
                                        d="M3 8.39258L10.8906 13.653C11.5624 14.1008 12.4376 14.1008 13.1094 13.653L21 8.39258M5 19.3926H19C20.1046 19.3926 21 18.4971 21 17.3926V7.39258C21 6.28801 20.1046 5.39258 19 5.39258H5C3.89543 5.39258 3 6.28801 3 7.39258V17.3926C3 18.4971 3.89543 19.3926 5 19.3926Z"
                                        stroke="#6B7280" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <p>support@example.com</p>
                            </div>
                        </div>
                        <p className='h-6'>
                            ¿Buscas un trabajo?
                            <Link to='' className='font-semibold leading-4 text-[14px] text-BlackP underline'> Ver nuestras ofertas.</Link>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-white w-[588px] py-8 pl-12 pr-8'>
                    <form className='flex flex-col items-start gap-6 w-[470px]'>
                        <div className='w-full flex flex-col gap-1'>
                            <label for="name" className='text-gray-700 text-xs'>Nombre completo</label>
                            <input type="text" name="name" id="name" className='flex w-full h-[34px] py-[9px] px-[13px] rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp' />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <label for="email" className='text-gray-700 text-xs'>Email</label>
                            <input type="text" name="email" id="email" className='flex w-full h-[34px] py-[9px] px-[13px] rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp' />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <label for="telefono" className='text-gray-700 text-xs'>Teléfono</label>
                            <div className='flex'>
                                <select className='relative left-2 bg-transparent border-none outline-none z-10'>
                                    <option value="+1">US</option>
                                    <option value="+34">ES</option>
                                    <option value="+58">VE</option>
                                </select>
                                <input type="text" name="telefono" id="telefono" className='min-w-[470px] h-[38px] py-[9px] pr-[13px] pl-[60px] rounded-md bg-transparent relative right-10 border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                    placeholder="+1 (555) 987-6543"/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label for="escribe" className='h-[17px]'></label>
                            <textarea className='w-full resize-y max-h-[150px] border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                name="escribe" id="escribe" cols="60" rows="5"></textarea>
                        </div>
                        <div className='flex gap-3 h-5'>
                            <input type="checkbox" name="check" id="check" className='w-4 h-4' />
                            <p className='text-gray-700 text-[14px] leading-4'>
                                Acepto la <Link className='font-semibold underline'>Política de privacidad </Link>
                                y los <Link className='font-semibold underline'>Términos y condiciones.</Link>
                            </p>
                        </div>
                        <Button text='Enviar' styles='text-white py-3 px-6 bg-GreenAll border-none rounded-[4px] text-[14px] leading-4 font-semibold' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SectionForm