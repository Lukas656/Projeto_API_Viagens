import { useState } from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Header/footer"
import './user.css'
import axios from "axios"

function User(){
const [nome, setNome] = useState()


return(
    <>
    <Header/>

       <section className="conteinerUser">
       <h1>Bem Vindo {nome}!!</h1>


       </section>

       <Footer />
   </>
    )
}

export default User