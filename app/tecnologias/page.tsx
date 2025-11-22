import tecnologias from '@/data/tecnologias.json'
import Image from 'next/image'

export default function page() {
    const listaTecnologias = JSON.parse(JSON.stringify(tecnologias))
    return (
        <section className="flex justify-center items-center flex-col">
               <h2 className="text-2xl font-bold mb-6">Tecnologias Exploradas</h2>

            {listaTecnologias.map((tec, i) => (
                <article className='flex justify-center items-center flex-col m-3 bg-blue-500 rounded-xl shadow'>
                    <h2>{tec.title}</h2>
                    <Image
                        src={`/tecnologias/${tec.image}`}
                        alt={`Logotipo do ${tec.title}`}
                        width={100}
                        height={100}
                        className="mb-4 m-4"
                    />
                    <p>{tec.description}</p>
                    <p>{tec.rating}</p>
                </article>

            ))}

        </section>
         
        
    )
}
