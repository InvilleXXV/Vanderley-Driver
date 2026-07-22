import "./Cards.css";
import { Car, Plane, Briefcase } from "lucide-react";

function Cards() {
    return (
      <section className="cards">

<article className="card">
       <div className="icon">
        <Car />
       </div>
    <h3>Corridas particulares</h3>
    <p>Transporte confortavel para seu dia a dia</p>
</article>

<article className="card">
       <div className="icon">
        <Plane />
       </div>
       <h3>Trasnlado aeroporto</h3>
       <p>Embarque e desenbarque</p>
</article>

<article className="card">
       <div className="icon">
        <Briefcase />
       </div>
       <h3>Viagens Hospedagem</h3>
       <p>Viagens a trabalho curtas e longas</p>
</article>
        </section>
    );
}

export default Cards;