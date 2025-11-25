interface CaracteristicaProps{
    caracteristica:string
}


export default function Caracteristica({caracteristica}:CaracteristicaProps){
    return(
        <>
        <article>
            <h2>{caracteristica}</h2>
        </article>
        
        </>
    )
}