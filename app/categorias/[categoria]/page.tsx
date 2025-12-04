'use client'
import useSWR from "swr";
import { useParams } from 'next/navigation'
import Image from "next/image"
import { Produto } from "@/models/interfaces"

  

import { url } from "inspector";
import Link from "next/link";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import { useEffect, useState } from "react";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Erro: ${res.status} ${res.statusText}`);
    }
    return res.json();
};




export default function page(){


    // 
    // A. Estados 
    const [produtosFiltrados, setProdutosFiltrados]= useState<Produto[]>()
      

     // 
     // B. FETCH DE DADOS
    const url = "https://deisishop.pythonanywhere.com/products"
    const { data, error, isLoading } = useSWR<Produto[]>(url, fetcher)

    const params= useParams();
    const id= Number(params.categoria)
    //const categoria =params.categoria
    const categoria = decodeURIComponent(params.categoria as string)

    //
    // C. Efeitos
    useEffect(()=>{
        if(!data) return

        setProdutosFiltrados( data.filter((prodct)=>prodct.category.toLowerCase()===categoria) )

    }, [data])

    // D. RENDERIZAÇÃO
    if (error) {
        return <p>{error.message}</p>
    }
    if (isLoading) {
        return <p>A carregar</p>
    }
    if (!data) {
        return <p>Não há dados</p>
    }
    if (!produtosFiltrados)
         return <p>Não há produtos</p>   


    return(

        <>
        
            <h2>PRODUTOS DA CATEGORIA {categoria} </h2>

            {produtosFiltrados.map((prod:any,i)=>(
                <article key={i}>
                    <p>ola</p>

                <h2>{prod.title}</h2>
                <Image src={prod.image} width={150} height={150} alt={prod.title} />

                </article>

            ))}

        


        
        </>
    )
}