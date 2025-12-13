'use client'
import { Produto } from "@/models/interfaces"
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from "react";
interface ProdutoCardProps {
  produto: Produto
}


export default function ProdutoCard({ produto }: ProdutoCardProps) {
  

  function adicionarCarrinho(produto:Produto) {
     const cartData = localStorage.getItem("cart")
     const cart=cartData ? JSON.parse(cartData) : []
      if (!cart.find((p: Produto)=> p.id === produto.id)) {
      const novoCart = [...cart, produto]
      localStorage.setItem("cart", JSON.stringify(novoCart))
     
    }
   
  }
  function removerCarrinho(produto:Produto) {

    const cartData = localStorage.getItem("cart")
  
    const cart=cartData ? JSON.parse(cartData) : []
    const novoCart = cart.filter((p: Produto) => p.id !== produto.id)
    localStorage.setItem("cart", JSON.stringify(novoCart))

  }


  return (
    <>
      <article>
        <h2>{produto.title}</h2>
        <Image
          src={`https://deisishop.pythonanywhere.com${produto.image}`}
          width={150}
          height={100}
          alt={produto.title}
          className="rounded-xl"
        />
        <h3>{produto.price}</h3>

        <Link href={`/produtos/${produto.id}`}>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
            +Info
          </button>
        </Link>
        <button onClick={()=>adicionarCarrinho(produto)}
           className="mt-2 bg-yellow-500 text-white rounded">
          Adicionar ao carrinho
        </button>
        <button
          onClick={()=>removerCarrinho(produto)}
          className="mt-2 bg-yellow-500 text-white rounded"
        >
          Remover do carrinho
        </button>



      </article>



    </>


  )
}