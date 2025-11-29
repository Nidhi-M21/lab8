
import Image from "next/image"

interface TecnologiaCardProps {
    title: string
    img: string
}

export default function TecnologiaCard({ title, img }: TecnologiaCardProps) {

    const

    return (
        <>
            <article className=" h-[100] w-[150] bg-purple-400 rounded-xl p-3 m-2 flex flex-col justify-center items-center">
                <h3 >{title}</h3>
                <Image
                    src={`/tecnologias/${img}`}
                    alt={`Logo de ${title}`}
                    width={50}
                    height={50}
                 />
                 

        </article>

        </>


    )

}