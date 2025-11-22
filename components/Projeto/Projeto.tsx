import Link from "next/link"

interface ProjetoProps{
    nome:string
    url:string
}


export default function Projeto({nome,url}:ProjetoProps){
    return<>
    <article className="bg-pink-300 p-2 rounded-xl m-2 ">
        <h2 className="text-2xl">{nome}</h2>
        <p>Explore o projeto {nome} &nbsp;
        <Link href={url} target="_blank" className="underline">LINK</Link>
        </p>
    </article>
    
    </>

}