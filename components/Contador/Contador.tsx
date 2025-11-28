'use client'
import { count } from "console"
import { useEffect, useState } from "react"


export default function Contador() {
    //A. ESTADO
    const [contador, setContador] = useState(()=>{
        const contadorGuardado=localStorage.getItem('contador')
        return contadorGuardado ? parseInt(contadorGuardado) : 0

    })

    const[lista,setlista]= useState<Number[]>([])

    //B. EFEITOS
    useEffect( ()=>{localStorage.setItem('contador',`${contador}`)},[contador])

    useEffect(()=>{setlista([...lista,contador])},[contador])

     function colorir(i:number){
        if(i>=0 && i<=3){
            return"text-red-400"
        }else if(i>=4 && i<=7){
          return"text-yellow-400"  
        }else if(i>=8 && i<=10){
            return "text-green-400" 
        }  
        }

//C. RENDERIZAÇÃO
    return (

        <>
            <h2>O contador vai a:</h2>
            <h2 className={colorir(contador)}>{contador}</h2>
            <button
                onClick={() => setContador(contador<10?contador + 1:10)}
                className="bg-pink-300 p-2 m-2 rounded-xl"
            >
                Contar
            </button>

            <button
                onClick={() => setContador(contador>0? contador - 1:0)}
                className="bg-pink-300 p-2 bg-pink-300 p-2 m-2 rounded-xl"
            >
                Decrementa
            </button>

            <button
                onClick={() => setContador(0)}
                className="bg-pink-300 p-2 bg-pink-300 p-2 m-2 rounded-xl"
            >
                Reset
            </button>

            {lista.map((elem,i)=>(
                <li>{elem}</li>
            ))}


        </>
    )
}