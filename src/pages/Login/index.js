import Header from "../../component/Header"
import Footer from "../../component/Header/footer"
import { useState } from 'react';
import './style.css'
import axios from 'axios';


function Login() {

    const validalogin = async function () {
        let usuario = document.getElementById('usuario').value
        let senha = document.getElementById('senha').value
        let user = { Login: usuario, Senha: senha }


        let res = await axios.post("http://localhost:5000/user", user)
        let data = await res.data;

        if (data.user == "Usuário não Encontrado, verifique se os dados estão corretos!!") {
            alert(data.user);
            console.log(data.user);

        } else {
            alert(data.user);
            console.log(data.user);
        }
    }

    return (
        <>
            <Header />
            <form className="main-login" >
                <div className="left-login">
                    <div className="left-login-image" alt="animação"></div>
                </div>
                <div className="right-login">
                    <div className="card-login">
                        <h1>Login</h1>

                        <div className="textfield">
                            <label for="usuario" htmlFor="username">Usuário</label>
                            <input type="text"
                                name="usuario"
                                id="usuario"
                                placeholder="Usuário"
                                autoFocus required
                            >
                            </input>
                        </div>

                        <div className="textfield">
                            <label for="senha" htmlFor="password">Senha</label>
                            <input type="password"
                                name="senha"
                                id="senha" required
                                placeholder="insira uma senha"
                            >
                            </input>
                        </div>

                        <p>Ainda não tem uma conta?  <a href="http://localhost:3000/Cadastro">Criar Conta</a></p>
                        <input type={"submit"} value="Entrar" className="btn-login" onClick={validalogin}></input>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Login;