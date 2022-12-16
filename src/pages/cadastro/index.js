import Header from "../../component/Header"
import Footer from "../../component/Header/footer"
import './style.css'
import axios from 'axios';



function Cadastro() {
    const btncadastro = async function () {
        let btn = document.querySelector('btn-login');
        let usuario = document.getElementById('usuario').value
        let login = document.getElementById('email').value
        let senha = document.getElementById('senha').value

        let user =  { Usuario: usuario, Login: login, Senha: senha }
        console.log(user)
           let res = await axios.post("http://localhost:5000/newuser", user)
           let data = await res.data;
           alert(data.user);
           console.log(data.user);
        }

    return (
        <>
            <Header />
            <form className="main-login" >
                <div className="right-login">
                    <div className="card-login">
                        <h1>Cadastro</h1>
                        <div className="textfield">
                            <label for="usuario">Usuário</label>
                            <input type="text" name="usuario" id="usuario" placeholder="Usuário" autoFocus required></input>
                        </div>

                        <div className="textfield">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required></input>
                        </div>

                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" id="senha" placeholder="Senha" required></input>
                        </div>
                        <p>Já tem uma conta?  <a href="http://localhost:3000/Login">Fazer Login</a></p>
                        <input type={"submit"} value="Salvar" className="btn-login" onClick={btncadastro}></input>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Cadastro;