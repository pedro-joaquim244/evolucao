    import style from "./style.module.css"

    export default function Header(){
    return(
    <header className={style.header}>
    <a href="#"><h1>Pedro Joaquim de Sousa</h1></a>
    <nav className={style.menu}>
        <a href="#MeusGostos">Meus gostos</a>
        <a href="#MinhaHistoria">Minha historia</a>
        <a href="#MeuFuturo">Meu futuro</a>
    </nav>
    </header>

    );
    }