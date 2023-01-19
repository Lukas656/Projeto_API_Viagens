import { useState } from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Header/footer"
import './style.css'
import axios from 'axios';


function Login() {
    const [name, setName] = useState()
    const [senha, setSenha] = useState()

     const validalogin = async function (e) {
        e.preventDefault()
         let user = { Login: name, Senha: senha}


         let res = await axios.post("http://localhost:5000/user", user)
        let data = await res.data;

         if (data.user == "Usuário não Encontrado, verifique se os dados estão corretos!!") {
             console.log("NAO Funcionou.............................");
             alert(data.user);

         } else {
             console.log(`Bem vindo ${data.user} !!`);
             alert(`Bem vindo ${data.user} !!`);
             window.open(`http://localhost:3000/${data.user}`);
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
                                name="Digite seu email"
                                id="usuario"
                                placeholder="Usuário"
                                autoFocus required
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                           
                        </div>

                        <div className="textfield">
                            <label for="senha" htmlFor="password">Senha</label>
                            <input type="password"
                                name="senha"
                                id="senha" required
                                placeholder="insira uma senha"
                                onChange={(e) => setSenha(e.target.value)}
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