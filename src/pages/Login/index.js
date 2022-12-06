import Header from "../../component/Header"
import './style.css'


function Login() {
    return (
        <>
            <Header />
            <div className="main-login" >
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

                        <p id="cc">Ainda não tem uma conta? <a href="#">Criar conta</a></p>
                        <button className="btn-login">Entrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;