import style from "./style.module.css";
import { Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className={style.footer}>
  <div className={style.content}>
    <h2 className={style.name}>Pedro Joaquim de Sousa</h2>

    <p className={style.subtitle}>
      Desenvolvido com  · React
    </p>

    <div className={style.socials}>
      <a href="https://github.com/pedro-joaquim244" target="_blank">
        <Github />
      </a>
      <a href="https://www.instagram.com/p.joaquimm/" target="_blank">
        <Instagram />
      </a>
    </div>

    <span className={style.copy}>
      © 2026 · Desenvolvido por Pedro Joaquim
    </span>
  </div>
</footer>
  );
}