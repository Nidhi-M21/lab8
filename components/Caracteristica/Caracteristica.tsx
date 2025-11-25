interface CaracteristicaProps{
    caracteristica:string
}


export default function Caracteristica({caracteristica}:CaracteristicaProps){
    return(
        <>
        <article className="bg-yellow-500 m-2 p-2 rounded-xl">
            <h2>{caracteristica}</h2>
        </article>
        
        </>
    )
}