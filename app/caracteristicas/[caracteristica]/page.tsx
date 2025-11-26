
'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation'
import caracteristicas from "@/data/caracteristicas.json"


export default function CarcacteristicaPage(){

    const params= useParams();
    const id=Number(params.caracteristica)
  
    return(
        <>
        <section className='flex flex-col justify-center items-center m-2 p-8 bg-blue-500 rounded-xl'>
            <h3>{caracteristicas[id]}</h3>
            <Link href="/caracteristicas"className='bg-purple-600  rounded-xl p-3 m-4'>Voltar</Link>
        </section>
        
        
        </>


    )
}