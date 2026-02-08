import style from "./style.module.css"

export default function MeuFuturo() {
    return (
        <>
            <section id="MeuFuturo">
                <h1 className={style.title}>Meu Futuro: </h1>
                <div className={style.cards}>
                    <div className={style.card}>
                        <h2 className={style.subtitle}>O que eu espero para o meu futuro profissional : </h2>
                        <p>
                           Para o meu futuro profissional, tenho como objetivo crescer na área de tecnologia, buscando aprendizado constante e desenvolvimento prático. Quero ingressar rapidamente no mercado de trabalho, adquirir experiência, assumir responsabilidades e construir uma carreira sólida, sempre focado em evolução e em alcançar estabilidade profissional.
                        </p>
                    </div>
                    <div className={style.card}>    
                        <h2 className={style.subtitle}>O que eu espero para o meu futuro pessoal : </h2>
                        <p>
                          No âmbito pessoal, busco independência, estabilidade e qualidade de vida. Quero alcançar minhas metas com dedicação, equilibrando estudos, trabalho e momentos de lazer. Além disso, valorizo o crescimento pessoal, novas experiências e a realização de objetivos que contribuam para meu bem-estar e para uma vida mais completa.
                        </p>
                    </div>



                </div>
            </section>




        </>

    )


}