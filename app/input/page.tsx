'use client'

import { useState } from "react"
import Lista from "@/components/Lista/Lista"



export default function page() {

    const [texto, setTexto] = useState("")
    return (

        <>
            <main className="flex flex-col justify-center items-center">
                <section>
                    <input
                        type="text"
                        placeholder="escreve algo.."
                        className="bg-purple-400 p-1 rounded-xl"
                        onChange={
                            (e) => setTexto(e.target.value)
                        }
                    />
                    <p className="text-black">Texto digitado: {texto}</p>
                </section>

                <section>
                    <select className="bg-green-400 p-2 rounded-xl m-3" name="campo" id="">
                        <option value="caracteristicas">Caracteristicas</option>
                        <option value="tecnologias">Tecnologias</option>
                    </select>
                </section>

                <Lista>

                </Lista>



            </main>
        </>

    )
}