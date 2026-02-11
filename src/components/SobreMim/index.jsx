    import style from "./style.module.css";

    import foto from "../../images/foto-minha.jpg";
    import img1 from "../../images/IMG_4383.jpeg";
    import img2 from "../../images/IMG_4177.jpeg";
    import img3 from "../../images/IMG_4164.jpeg";

    import { Swiper, SwiperSlide } from "swiper/react";
    import { EffectCoverflow, Pagination } from "swiper/modules";

    import "swiper/css";
    import "swiper/css/effect-coverflow";
    import "swiper/css/pagination";

    export default function SobreMim() {
    const data = [
        { id: 1, image: foto },
        { id: 2, image: img1 },
        { id: 3, image: img2 },
        { id: 4, image: img3 },
    ];

    return (
        <div className={style.Hero}> 
        <div className={style.text}>
            <h2 className={style.title}>Quem eu sou ?</h2>
            <p>Eu sou o Pedro Joaquim eu tenho 16 anos e estou ensino médio, sou muito interessado na área de programação e desenvolvimento, com foco em aprendizado constante e crescimento profissional. Tenho cabelo cacheado, cuido bastante da minha aparência.Sou dedicado, organizado e busco evoluir tanto nos estudos quanto nos meus objetivos pessoais, como a faculdade.</p>
        </div>
        <section className={style.container}>
        <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
        >
            {data.map((item) => (
            <SwiperSlide key={item.id} className={style.slide}>
                <img src={item.image} alt="Slide" />
            </SwiperSlide>
            ))}
        </Swiper>
        </section>
        </div>
        
    );
    }