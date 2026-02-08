import style from "./style.module.css";

import Avos from "../../images/Avos.JPEG";
import Mae from "../../images/Mae.JPEG";
import Let from "../../images/Leticia.jpg";
import Ze from "../../images/ze.JPEG";
import Pai from "../../images/Pai.JPEG";

export default function MinhaHistoria() {
  return (
    <section id="MinhaHistoria">

      <h1 className={style.title}>Minha História:</h1>

      <div className={style.card}>
        <h2 className={style.subtitle}>Como eu cheguei aqui?</h2>

        <p>
          Eu comecei minha jornada na área de tecnologia com uma paixão por resolver
          problemas e criar soluções inovadoras. Minha trajetória começou com estudos
          básicos em programação, onde desenvolvi habilidades essenciais como lógica
          e resolução de problemas. Com o tempo, me especializei em desenvolvimento web,
          explorando tecnologias como React e Node.js.
        </p>
      </div>

      <h2 className={style.subTitlePeople}>Pessoas que eu gosto:</h2>

      <div className={style.pessoas}>

        {/* Avós */}
        <div className={style.pessoa}>
          <div className={style.flipCard}>

            {/* Frente */}
            <div className={style.front}>
              <img src={Avos} alt="Avós" />
            </div>

            {/* Verso */}
            <div className={style.text_pessoa}>
              <h3>Wallyson</h3>
              <p>Meu pai</p>
            </div>

          </div>
        </div>

        {/* Mãe */}
        <div className={style.pessoa}>
          <div className={style.flipCard}>

            <div className={style.front}>
              <img src={Mae} alt="Mãe" />
            </div>

            <div className={style.text_pessoa}>
              <h3>Patricia</h3>
              <p>Minha mãe</p>
            </div>

          </div>
        </div>

        {/* Letícia */}
        <div className={style.pessoa}>
          <div className={style.flipCard}>

            <div className={style.front}>
              <img src={Pai} alt="avos" />
            </div>

            <div className={style.text_pessoa}>
              <h3>Marta E Antonio</h3>
              <p>Meus avós</p>
            </div>

          </div>
        </div>

        {/* José */}
        <div className={style.pessoa}>
          <div className={style.flipCard}>

            <div className={style.front}>
              <img src={Ze} alt="Zé" />
            </div>

            <div className={style.text_pessoa}>
              <h3>José</h3>
              <p>Meu amigo</p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
