import Caracteristica from "@/components/Caracteristica/Caracteristica"

import caracteristica from "@/data/caracteristicas.json"
import Link from "next/link"
export default function page() {

  
  return (
        <>
            <h2>Características do React e Next.js</h2>

            {caracteristica.map((caracteristica, i) => (
               <Link href={"/caracteristicas/"+i}> 
               <Caracteristica
                    key={i}
                    caracteristica={caracteristica} 
                /></Link>
            ))}
        </>
    )
}