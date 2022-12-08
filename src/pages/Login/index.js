import Header from "../../component/Header"
import './style.css'
import axios from 'axios';



function Login() {
    const btnLogin = async function () {
        let btn = document.querySelector('btn-login');
        let usuario = document.getElementById('usuario').value
        let senha = document.getElementById('senha').value
        let user = { Login: usuario, Senha: senha }
        console.log(user)

        let res = await axios.post("http://localhost:5000/user", user)
        let data = await res.data;
        alert(data.user);
        console.log(data.user);
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
                            <label for="usuario">Usuário</label>
                            <input type="text" name="usuario" id="usuario" placeholder="Usuário" autoFocus required></input>
                        </div>

                        <div className="textfield">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" id="senha" placeholder="Senha" required></input>
                        </div>
                        <input type={"submit"}  value="Entrar" className="btn-login" onClick={btnLogin}></input>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;