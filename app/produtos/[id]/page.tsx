'use client' 
import useSWR from 'swr'

import { Produto } from '@/models/interfaces'
import Link from 'next/link'
import { useParams } from 'next/navigation'



    const fetcher = async(url:string)=>{

    const resposta= await fetch(url)
    if(!resposta.ok){
        throw new Error(`Erro: ${resposta.statusText}`)
    }
   return resposta.json()
}



export default function page (){

  const params= useParams()
  const id= params.id
     

const url='https://deisishop.pythonanywhere.com/products/'+id

 const {data:produto,error,isLoading}=useSWR<Produto>(url,fetcher)


if (error) {
        return <p>{error.message}</p>
    }

    if (isLoading) {
        return <p>A carregar</p>
    }
    if (!produto) {
        return <p>Não há produto</p>
    }

    return(
      <>
      <article>
        <h2>{produto.title}</h2>
          <p className='bg-blue-300 p-2 rounded-xl'>{produto.description}</p>
          <p>{produto.rating.rate} ⭐</p>

         <Link href="/produtos">
        <button className="mb-4 bg-blue-400 px-3 py-1 rounded">
          ← Voltar
        </button>
      </Link>
      </article>
      
      </>
     
    )

}