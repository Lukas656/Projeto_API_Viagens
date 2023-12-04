import Header from "../../component/Header"
import Footer from "../../component/Header/footer"
import './css/style.css'
// Importando imagens do projeto

import LucasS from "./img/Lucas-Santos.jpeg";
import github from "./img/icons/github.jpg";
import linkedin from "./img/icons/linkedin.png";
import instagram from "./img/icons/instagram.jpg";
import imgProjeto from "./img/Project.png";
import html from "./img/tecnologias-icons/html5-logo.png";
import css from "./img/tecnologias-icons/css-3-logo.png";
import js from "./img/tecnologias-icons/javascript-logo.png";
import apiNode from "./img/icons/logo-node-js.png";
import apiReact from "./img/tecnologias-icons/logo_react.png";

function Sobre() {
    return (
        <>
            <Header />

            <div className="card-about">
                <h3 className="about">Apresentação dos Desenvolvedores</h3>
            </div>


            <div className="container1">
               
                    <div className="container2">
                        <div className="cards">
                            <div className="imagem">
                                <img className="img" src={LucasS} alt=""></img>
                            </div>
                            <div className="texto">
                                <h2 className="text-nome">Lucas Santos</h2>
                                <h3 className="texto2">Aluno Colaborador</h3>
                            </div>
                            <div className="social-midias">
                                <ul>
                                    <li>
                                        <a href="//" target="_blank">
                                            <img className="logo-icons" src={github} alt="logo-github.jpg"></img>
                                        </a>

                                        <a href="//" target="_blank">
                                            <img className="logo-icons" src={linkedin} alt="logo-github.jpg"></img>
                                        </a>

                                        <a href="//" target="_blank">
                                            <img className="logo-icons" src={instagram} alt="logo-instagram.jpg"></img>
                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className="card-sobre-projeto">
                        <h3 className="about">Sobre o Projeto</h3>
                    </div>


                    <div className="containerProjeto">

                        <div className="imagem-projeto">
                            <img className="img-projeto" src={imgProjeto} alt="Imagem-projeto.png"></img>

                            <div className="textoprojeto">
                                <h2 className="texto-projeto2">
                                    Projeto de final de curso oferecido pela escola de programação +1Code onde os alunos com a mentoria do professor
                                    desenvolveram uma API de um site de viagens,<br />
                                    nela você faz seu cadastro e login e logo em seguida poderá agendar suas viagens para qualquer lugar do Brasil.
                                    <br />
                                    <br />
                                    Faça login e conheça na prática !!!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="s-m">

                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
                            <img className="logo-icons2" src={html} alt="html5-logo.png" />
                        </a>

                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
                            <img className="logo-icons2" src={css} alt="css-3-logo.png" />
                        </a>

                        <a href="https://aws.amazon.com/pt/what-is/javascript/" target="_blank">
                            <img className="logo-icons2" src={js} alt="javascript-logo.png" />
                        </a>

                        <a href="https://nodejs.org/en/download/" target="_blank">
                            <img className="logo-icons2" src={apiNode} alt="logo_Node.png" />
                        </a>
                        <a href="https://pt-br.reactjs.org/" target="_blank">
                            <img className="logo-icons2" src={apiReact} alt="logo_react.png" />
                        </a>
                    </div>
                </div>
            <Footer />

        </>
    )
}

export default Sobre