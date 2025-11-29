'use client'

import { useEffect, useState } from "react"



export default function Relogio() {

    const [hora,setHora]=useState("")

    useEffect(() => {

        const id = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(id);
    }, []);

 return (
    <h2>Hora atual: {hora}</h2>
  );
}