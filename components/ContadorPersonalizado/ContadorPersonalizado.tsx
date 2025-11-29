
'use client'

import { useState } from "react"

interface ContadorPersonalizadoProps{
    title:string
}



export default function ContadorPersonalizado({title}:ContadorPersonalizadoProps){

    const chaveTitulo="likes "+{title}

    const [likes,setLikes]= useState(0)

    


    return(

        <>
        <button onClick={()=>{
            const likesNovos=likes+1
               setLikes(likesNovos)
                localStorage.setItem(chaveTitulo,String(likesNovos))

        }
         


        }>{likes}</button>
        
        
        </>
    )


}