import Header from "../../component/Header"
import Footer from "../../component/Header/footer"
import { useState } from 'react';
import './user.css'
import axios from 'axios';

function User(){


return(
    <>
    <Header/>
       <section className="conteinerUser">
       <h1>Bem Vindo Usuário!!</h1>
       </section>

       <Footer />
   </>
    )
}

export default User