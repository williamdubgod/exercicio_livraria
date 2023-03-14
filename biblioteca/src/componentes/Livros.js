import React from "react"
import Livro1 from '../img/ladrao-raios.jpg';
import Livro2 from '../img/maldicao-tita.jpg';
import Livro3 from '../img/ultimo-olimpiano.jpg';
import Livro4 from '../img/batalha-labirinto.jpg';
import Livro5 from '../img/pedra-filosofal.jpg'
import Livro6 from '../img/calice-fogo.jpg'
import Livro7 from '../img/camara-secreta.jpg'
import Livro8 from '../img/prisioneiro-azkaban.jpg'
import Livro9 from '../img/enigma-principe.jpg'
import Livro10 from '../img/reliquias-morte.jpg'
import Livro11 from '../img/diario-banana.jpg'
import Livro12 from '../img/banana2.jpg'

export default function Livros() {
    return (
        <>
        <main>
            <div className="livros">
                <div className="card-livro">
                    <img src={Livro1} alt="Ladrão de Raios" />
                    <p>O ladrão de Raios</p>
                    <spam>R$ 74,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro2} alt="A Maldição do Titã" />
                    <p>A Maldição do Titã</p>
                    <spam>R$ 89,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro3} alt="O Último Olimpiano" />
                    <p>O Último Olimpiano</p>
                    <spam>R$ 100,00</spam>
                </div>
                <div className="card-livro">
                <img src={Livro4} alt="A Batalha do Labirinto" />
                    <p>A Batalha do Labirinto</p>
                    <spam>R$ 64,50</spam>
                </div>
                <div className="card-livro">
                <img src={Livro5} alt="A Pedra Filosofal" />
                    <p>A Pedra Filosofal</p>
                    <spam>R$ 49,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro6} alt="Cálice de Fogo" />
                    <p>Cálice de Fogo</p>
                    <spam>R$ 55,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro7} alt="Câmara Secreta" />
                    <p>Câmara Secreta</p>
                    <spam>R$ 69,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro8} alt="Prisioneiro de Azkaban" />
                    <p>Prisioneiro de Azkaban</p>
                    <spam>R$ 199,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro9} alt="Enigma do Principe" />
                    <p>O ladrão de Raios</p>
                    <spam>R$ 74,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro10} alt="Reliquias da Morte" />
                    <p>Enigma do Principe</p>
                    <spam>R$ 200,00</spam>
                </div>
                <div className="card-livro">
                <img src={Livro11} alt="Diário de um Banana" />
                    <p>Diário de um Banana</p>
                    <spam>R$ 25,90</spam>
                </div>
                <div className="card-livro">
                <img src={Livro12} alt="Diário de um Banana 2" />
                    <p>Diário de um Banana 2</p>
                    <spam>33,90</spam>
                </div>
            </div>
        </main>
        </>
    )
}