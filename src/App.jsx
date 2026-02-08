import Header from "./components/Header";
import MeusGostos from "./components/MeusGostos";
import SobreMim from "./components/SobreMim";
import "./styles/App.css";
import MeuFuturo from "./components/MeuFuturo";
import { Swiper, SwiperSlide } from "swiper/react";
import MinhaHistoria from "./components/MinhaHistoria";
function App() {
  return (
    <>
      <Header/>
      <SobreMim/>
      <MeusGostos/>
      <MinhaHistoria/>
      <MeuFuturo/>
    </>
  );
}

export default App;

