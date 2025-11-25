import Caracteristica from "@/components/Caracteristica/Caracteristica"
export default function page() {

    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]
  return (
        <>
            <h2>Características do React e Next.js</h2>

            {caracteristicas.map((caracteristica, i) => (
                <Caracteristica
                    key={i}
                    caracteristica={caracteristica}
                    
                />
            ))}
        </>
    )
}// o que estav ano lab 8: <li key={i}>{caracteristica}</li>