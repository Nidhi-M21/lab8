export default function MagiaDoJSX(){

    const magia=<strong>HTML dentro de JavaScript!</strong>
    const tecnologias="React e Next.js"
    return (
        <div>
        <p className="bg-blue-300 p-3 m-3 rounded-xl">Este é o mei componente MagiaDoJSX.</p>
        <p>Um componente é uma função que retorna JSX- {magia}</p>
        <p>Os componenetes são usados em {tecnologias}</p>
    </div>
    )
}