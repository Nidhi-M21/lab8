'use client'

import { useState } from "react"

export default function Lista(){

    const [listaTarefas,setlistaTarefas]=useState<string[]>([])
    const [novaTrefa,setNovaTarefa]= useState("")


    function adicionarTarefa(){
        setlistaTarefas([...listaTarefas,novaTrefa])
        setNovaTarefa("")
    }

    function apagarTarefa(nome:string){

        const novaLista=listaTarefas.filter((tarefa)=>tarefa!==nome)
        setlistaTarefas(novaLista)

    }


    return(
        <>
        
        
        <h2 className="text-purple-600 m-3">LISTA DE TAREFAS</h2>
        <input 
        type="text"
        className="bg-purple-400 p-2 rounded-xl m-2"
        placeholder="tarefa"
        onChange={(e)=>setNovaTarefa(e.target.value)
            
        }/>
        <button onClick={adicionarTarefa} className="bg-blue-300 p-1 rounded-xl">Adicionar Tarefa</button>
      <ul>
          {listaTarefas.map((elem,i)=>(
            <li key={i}>{elem}

             <button onClick={()=>apagarTarefa(elem)} className="bg-blue-500 m-3 rounded p-1">Apagar</button>
             
             </li>
            
          
        ))}
      </ul>

        </>


    )
}