
'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation'


export default function CarcacteristicaPage(){

    const params= useParams();
    const caracteristica= params.caracteristica
  
    return(
        <>
        <section className='flex flex-col justify-center items-center  p-8'>
            <h3>{caracteristica}</h3>
            <Link href="/caracteristicas"className='bg-purple-600  rounded-xl p-3'>Voltar</Link>
        </section>
        
        
        </>


    )
}