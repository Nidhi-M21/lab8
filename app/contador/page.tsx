
'use client'
import { count } from "console"
import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils"
import { useEffect, useState } from "react"

export default function page() {

    //A. ESTADO
    const [contador, setContador] = useState(0)
    const[texto,setTexto]=useState("")
    const[lista,setLista]=useState<number[]>([])

    //B. EFEITOS
    useEffect(()=>{
        setLista([...lista,contador])
    },[contador])

    function colorir(i:number){
        return i>5 ? "text-green-400":"text-red-400"
    }
    

    //C. RENDERIZAÇAO
    return (
        <>
            <h2 className={colorir(contador)}>{contador}</h2>

            <button 
                onClick={() => (
                    setContador(contador + 1))    
                }
                className="bg-pink-400 p-2 rounded-xl"
                
            >
                Contar
            </button>
              <button 
                onClick={() => (
                    setContador(contador-1))
                }
                className="bg-pink-400 p-2 rounded-xl m-3"
            
            >
                Decrementar
            </button>

            {lista.map((elem,i)=>(
                <p>{elem}</p>

            )
                
            )}

        <input 
            type="text" 
            placeholder="escreva aqui" 
            onChange={(e)=>setTexto(e.target.value)}
            className="bg-purple-500 p-2 rounded-xl"
        />
        <p>{texto}</p>

        </>
    )
}