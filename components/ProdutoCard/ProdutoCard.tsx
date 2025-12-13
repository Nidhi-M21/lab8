
import { Produto } from "@/models/interfaces"
import Image from 'next/image'
import Link from "next/link"
interface ProdutoCardProps {
    produto: Produto
}



export default function ProdutoCard({ produto }: ProdutoCardProps) {

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

      <button>Cart</button>

            </article>



        </>


    )
}