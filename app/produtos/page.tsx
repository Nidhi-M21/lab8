'use client'
import { Produto } from "@/models/interfaces"
import useSWR from "swr";
import Image from 'next/image'
import { Button } from "@/components/ui/button"




const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Erro: ${res.status} ${res.statusText}`);
    }
    return res.json();
};

export default function page() {

    //FETCH DE DADOS
    const url = "https://deisishop.pythonanywhere.com/products"

    const { data, error, isLoading } = useSWR<Produto[]>(url, fetcher)


    //RENDERIZAÇÃO
    if (error) {
        return <p>{error.message}</p>
    }

    if (isLoading) {
        return <p>A carregar</p>
    }
    if (!data) {
        return <p>Não há dados</p>
    }
console.log(JSON.stringify(data))
    return (
        <>
        <Button className="bg-blue-500">Click me</Button>
            {data.map(produto => (
                <article
                key={produto.id}
                >
                    <h2>{produto.title}</h2>
                    {/* <Image
                        src={produto.image}
                        width={100}
                        height={100}
                        alt={produto.title}
                    />
                     */} 
                </article>


            ))}


        </>
    )
}