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

export default function Home(props) {
    return (
        <>
        <main>
            <div className="livros">
                <img src={Livro1} alt="Ladrão de Raios" />
                <img src={Livro2} alt="A Maldição do Titã" />
                <img src={Livro3} alt="O Último Olimpiano" />
                <img src={Livro4} alt="A Batalha do Labirinto" />
                <img src={Livro5} alt="A Pedra Filosofal" />
                <img src={Livro6} alt="Cálice de Fogo" />
                <img src={Livro7} alt="Câmara Secreta" />
                <img src={Livro8} alt="Prisioneiro de Azkaban" />
                <img src={Livro9} alt="Enigma do Principe" />
                <img src={Livro10} alt="Reliquias da Morte" />
                <img src={Livro11} alt="Diário de um Banana" />
                <img src={Livro12} alt="Diário de um Banana 2" />
            </div>
        </main>
        </>
    )
}