import tecnologias from '@/data/tecnologias.json'
import Image from 'next/image'
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard'
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

