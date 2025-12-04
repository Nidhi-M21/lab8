
'use client'
import useSWR from "swr";

import { url } from "inspector";
import Link from "next/link";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Erro: ${res.status} ${res.statusText}`);
    }
    return res.json();
};




export default function page(){
    const url="https://deisishop.pythonanywhere.com/categories"

    const {data,error,isLoading}= useSWR<string[]>(url,fetcher)
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
    return(

        <>
        <h2 className="text-black">Categorias</h2>
     
        {data.map((catg,i)=>(
             <Link  key={i} href={`/categorias/${i}`}>
            <li className="text-black">{catg}</li>
             </Link>
        ))}
      
     

        
        
        </>


    )
}