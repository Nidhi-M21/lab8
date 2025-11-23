import tecnologias from '@/data/tecnologias.json'
import Image from 'next/image'
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'
import { title } from 'process'
import Link from 'next/link'

export default function page() {
    const listaTecnologias = JSON.parse(JSON.stringify(tecnologias))
    return (
        <>
            <h2 className="text-2xl font-bold  text-center">Tecnologias Exploradas</h2>
            <section className="grid grid-cols-3 gap-1 m-2">

                {listaTecnologias.map((tec, i) => (
                    <Link key={i} href={`/tecnologias/${i}`}>
                        <TecnologiaCard
                            key={i}
                            title={tec.title}
                            img={tec.image}
                        />
                    </Link>

                ))}



            </section>


        </>




    )
}
/* LAB8
  <main className="w-[600px] mx-auto">
            <h2 className="text-2xl font-bold  text-center">Tecnologias Exploradas</h2>
            <section className="grid grid-cols-3 gap-1 m-2">
                {listaTecnologias.map((tec, i) => (
                    <article 
                    key={i}
                     className='flex justify-center items-center flex-col m-3 bg-blue-500 rounded-xl shadow'>
                        <h2>{tec.title}</h2>
                        <Image
                            src={`/tecnologias/${tec.image}`}
                            alt={`Logotipo do ${tec.title}`}
                            width={100}
                            height={100}
        
                        />
                        <p className='p-2'>{tec.description}</p>
                        <p>{tec.rating}</p>
                    </article>

                ))}

            </section>

        </main>
*/
