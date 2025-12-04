import { Produto } from "@/models/interfaces"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface  ProdutoCardProps{
    title:string
    image:string
}


export default function ProdutoCard({title,image }: ProdutoCardProps ){
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                            src={image}
                            width={150}
                            height={100}
                            alt={title}
                            className="rounded-xl"
                        />
                </CardContent>
                <CardFooter>
                    <Button>COMPRAR</Button>
                </CardFooter>
            </Card></>
    )
}