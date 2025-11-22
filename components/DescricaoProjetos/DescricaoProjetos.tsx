import Link from "next/link";
import Projeto from "@/components/Projeto/Projeto"

export default function DescricaoProjetos(){
    return<>
        <Link href="https://github.com/Nidhi-M21?tab=repositories"target="_blank">GitHub</Link>

        <Projeto
            nome="LOJA"
            url="https://nidhi-m21.github.io/"
        />
        </>
    
}