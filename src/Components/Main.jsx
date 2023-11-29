import LaCuma from '../assets/la-cuma.png';
import LaBana from "../assets/la bana.png";
import LaMenta from "../assets/la-menta.png";
import LaToca from "../assets/la-toca.png";
import { useState } from "react";

export default function Index() {

  const [sabor, setSabor] = useState("")
  const [pizza, setPizza] = useState()

  const MudarPizzaCuma = () => {
    setSabor("Cuma")
    setPizza(LaCuma)
  }

  const MudarPizzaMenta = () => {
    setSabor("Menta")
    setPizza(LaMenta)
  }

  const MudarPizzaBana = () => {
    setSabor("Bana")
    setPizza(LaBana)
  }

  const MudarPizzaToca = () => {
    setSabor("Toca")
    setPizza(LaToca)
  }
  return (
    <main>
      <h2>Escolha seu sabor favorito</h2>

      <div className="caixaMostraPizza">
        <img src={pizza} alt="" />
        <h2>{sabor}</h2>
      </div>

      <section>

        <figure>

          <img src={LaCuma} alt="imagem de pizza" />
          <h3>La Cuma</h3>
          <button onClick={() => MudarPizzaCuma()}>Comprar agora</button>

        </figure>

        <figure>

          <img src={LaMenta} alt="imagem de pizza" />
          <h3>La Menta</h3>
          <button onClick={() => MudarPizzaMenta()} >Comprar agora</button>

        </figure>

        <figure>

          <img src={LaBana} alt="imagem de pizza" />
          <h3>La Bana</h3>
          <button onClick={() => MudarPizzaBana()} >Comprar agora</button>

        </figure>

        <figure>

          <img src={LaToca} alt="imagem de pizza" />
          <h3>La Toca</h3>
          <button onClick={() => MudarPizzaToca()} >Comprar agora</button>

        </figure>


      </section>
    </main>
  );
}