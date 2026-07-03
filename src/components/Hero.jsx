import carro from "../assets/carro.png";
import "./Hero.css";
function Hero() {
    return (

<section className="hero">

<div className="hero-content">
    <h1>Conforto, Segurança e Pontualidade em cada viagem.</h1>
    <p>Pontualidade para viagem urbanas, aeroportos e atendimento executivo.</p>

<div className="hero-buttons">
   <button>Local</button>
   <button>WhatsApp</button>
   </div>
</div>

<div className="hero-image">
    <img src={carro} alt="Carro executivo" />
</div>

</section>
     );
}
export default Hero;