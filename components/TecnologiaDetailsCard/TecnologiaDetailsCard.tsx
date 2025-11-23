import Link from "next/link"



interface TecnologiaDetailsCardProps {
    title: string
    img: string
    description: string
    rating: number

}

export default function TecnologiaDetailsCard({ title, description, rating }: TecnologiaDetailsCardProps) {


    return (
        <>
            <article className="bg-yellow-500 p-6 rounded-lg shadow">
                <h2 >{title}</h2>
                <p>{description}</p>
                <p>{rating}</p>
                <Link href="/tecnologias" className="font-bold bg-yellow-700 p-2 rounded-xl">Voltar</Link>

            </article>

        </>

    )
}