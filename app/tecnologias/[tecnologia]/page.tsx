'use client'
import tecnologias from'@/data/tecnologias.json'
import { useParams } from 'next/navigation'
import TecnologiaDetailsCard from '@/components/TecnologiaDetailsCard/TecnologiaDetailsCard';


export default function TecnologiaPage(){
    const params= useParams();
    const id= Number(params.tecnologia)


    return <>
    <section>
            <TecnologiaDetailsCard 
            title={tecnologias[id].title}
            img={tecnologias[id].image}
            description={tecnologias[id].description}
            rating={tecnologias[id].rating}
            
            />
    </section>
    
    </>

}

