import style from "./style.module.css"
import IMAGEM3 from "../../images/IMAGEM3.JPEG";
import IMAGEM4 from "../../images/IMAGEM4.JPEG";
import IMAGEM5 from "../../images/IMAGEM5.JPEG";
import IMAGEM6 from "../../images/IMAGEM6.JPEG";
import IMAGEM7 from "../../images/IMAGEM7.JPEG";
import IMAGEM8 from "../../images/IMAGEM8.JPEG";
import IMAGEM9 from "../../images/IMAGEM9.JPEG";
import IMAGEM10 from "../../images/IMAGEM10.PNG";

export default function MeusGostos() {
  return (
    <>
   <section id="MeusGostos">
    <h1 className={style.title}>Meus Gostos:</h1>

  <div className={style["Hobbies-wrapper"]}>
  <div className={style.Hobbies}>
    <img src={IMAGEM5} />
    <img src={IMAGEM4} />
    <img src={IMAGEM3} />
    <img src={IMAGEM6} />
    <img src={IMAGEM7} />
    <img src={IMAGEM8} />
    <img src={IMAGEM9} />
    <img src={IMAGEM10} />

    {/* DUPLICAÇÃO PARA LOOP INFINITO */}
    <img src={IMAGEM5} />
    <img src={IMAGEM4} />
    <img src={IMAGEM3} />
    <img src={IMAGEM6} />
    <img src={IMAGEM7} />
    <img src={IMAGEM8} />
    <img src={IMAGEM9} />
    <img src={IMAGEM10} />
  </div>
</div>

        <h2 className={style.descricao}>O que essas fotos representam:</h2>
 <div className={style.Card}>
    <div className={style.text}>
        <p>Como as fotos mostram, eu tenho diversos hobbies e interesses. Gosto de mexer no meu computador, explorar e aprender coisas novas na área de tecnologia, sair para dar uma volta de carro, praticar esportes, como o vôlei, e também dedicar um tempo para arrumar meu cabelo. Essas atividades fazem parte da minha rotina e refletem meus gostos e minha forma de aproveitar o tempo livre.    
        </p>
    </div>
</div>
   </section>
     

    </>
  );
}