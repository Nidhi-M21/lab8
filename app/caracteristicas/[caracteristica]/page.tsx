
'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation'
    const caracteristicas = [
    'JSX, sintaxe que mistura HTML e JS.',
    'Componentes, funções que retornam JSX.',
    'Componentes Reutilizáveis e Modulares.',
    'Roteamento Automático e APIs.',
    'Hooks: useState, useEffect e useSWR.',
    'Renderização Rápida e SEO Friendly.',
    'TypeScript Seguro e Escalável.',
    'Comunidade Ativa e Popularidade.'
];


export default function CarcacteristicaPage(){


     const params= useParams();
    const caracteristica= params.caracteristica
        const id = Number(params.caracteristica);
        
   // const texto = caracteristicas[id];
  
    return(


        <>
        <section className='flex flex-col items-center justify-center p-8'>
            <h3>{caracteristicas[id]}</h3>
            <Link href="/caracteristicas"className='bg-blue-600  rounded-xl'>Voltar</Link>
        </section>
        
        
        </>


    )
}