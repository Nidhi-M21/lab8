'use client'
import { Produto } from "@/models/interfaces"
import useSWR from "swr";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import ProdutoCard from "@/components/ProdutoCard/ProdutoCard";
import { useEffect, useState } from "react";
import Link from "next/link";




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

    const[search,setSerach]=useState("")
    const[select,setSelect]= useState("")
    const[filteredData,setFilteredData]= useState<Produto[]>([])
    const[cart,setCart]=useState<Produto[]>([])

    useEffect(()=>{

        const cartData= localStorage.getItem("cart")
        if(cartData){
            setCart(JSON.parse(cartData))
        }

    },[])

        useEffect(()=>{
            if (!data) return
        const produtosFiltardos= data.filter(produto=>produto.title.toLowerCase().includes(search.toLowerCase()))
        setFilteredData(produtosFiltardos)
    },[search,data])


    useEffect(()=>{
            let produtosOrdenados=selectOrdem(select)
        setFilteredData(produtosOrdenados)
    },[select])

    function selectOrdem(ordem:string){

        const produtosOrdenados=[...filteredData];

        if(ordem==='nome'){
            produtosOrdenados.sort((a,b)=>a.title.localeCompare(b.title))
        }else if(ordem==='precoCres'){
             produtosOrdenados.sort((a,b)=>a.price-b.price)
        }else if(ordem==='precoDesc'){
             produtosOrdenados.sort((a,b)=>b.price-a.price)
        }

        return produtosOrdenados

    }

    function adicionarCarrinho(produto:Produto){
        const novoCart=[...cart,produto]
        setCart(novoCart)
        localStorage.setItem("cart",JSON.stringify(novoCart))
    }

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

     <main>
           <div className="flex justify-center items-center ">
            <section className="m-3 p-2">
            <label className="m-2">Pesquise:</label>
            <input 
             type="text" 
             placeholder="pesquise o item" 
             className="bg-blue-500  h-[30px] m-2 rounded-md" 
             onChange={(e)=>setSerach(e.target.value)}
            />

        </section>

        <section>
            <select name="" id=""
            onChange={(e)=>setSelect(e.target.value)}
            className="bg-purple-300 p-1 rounded-md"
            >

            <option value="nome">Nome</option>
            <option value="precoCres">Preço Crescente</option>
            <option value="precoDesc">Preço Decrescente</option>
            </select>


        </section>
           </div>

        <section className=" grid grid-cols-3 gap-10">
                {filteredData.map((produto,i) =>
            
            
                 <ProdutoCard
                    produto={produto}
                />
            )}


        </section>


     </main>


        </>
    )
}