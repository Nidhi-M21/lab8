'use client'
import { Produto } from "@/models/interfaces"
import useSWR from "swr";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard/ProductCard"

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
    return (

        <>
            <main className=" grid grid-cols-3 gap-3">
          
                
                {data.map((product, i) => (

                 <ProductCard
                 title={product.title}
                 image={product.image}
                 />


                ))}

            </main>


        </>
    )
}

/**
   <main className=" grid grid-cols-3 ">
          
                
                {data.map((product, i) => (

                    <article
                        key={i}
                        className="bg-purple-500 rounded-xl p-2 m-3 flex flex-col justify-between items-center gap-3"
                    >
                        <h2>{product.title}</h2>
                        <Image
                            src={product.image}
                            width={150}
                            height={100}
                            alt={product.title}
                            className="rounded-xl"
                        />
                        <p>{product.description}</p>
                        <p> Rate: {product.rating.rate}</p>
                        <Button>Click me</Button>
                        

                    </article>



                ))}

 */