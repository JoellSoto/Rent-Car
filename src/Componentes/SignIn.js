import Logo from './imagens/logo.jpeg'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import NovoUser from './Cliente'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState} from 'react'



export default function Entrada(props){

    const chamada=(e)=>{
        navigate("/HomePage", { replace: true })
        //props.setVeiculoId(e.data.num)
        localStorage.setItem("id",e.data.num);
        console.log("O ID é "+localStorage.getItem("id"))
    }

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    let navigate = useNavigate();
    const[msg,setMsg]=useState("")
    const send= async(e)=>{
        
        e.preventDefault()
    
                                    
        
        await axios.post('http://gestao-aluguer.herokuapp.com/signin/',{
            "username":email,
            "password":password
        }).then(response=>{ response.data.status=='ok'?chamada(response):setMsg("Erro no Email ou Password!")})

        console.log("email "+email,
        "password "+password)
 
    
    }



    return(<>
      
    
    <Form style={{margin:'0%'}} >

        <section style={{paddingTop:'6%',paddingRight:'45%', paddingLeft:'30%'}} className="text-center ">

            <img src={Logo} style={{width:'20%', height:'40%'}} className="mx-auto"/>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label  style={{margin:'2%'}}>Endereço Email </label>
                    <input type="email" className="form-control" placeholder="Introduza email"  onChange={(e)=>{setEmail(e.target.value);setMsg("")}} />
                </div>

                <div className="form-group">
                    <label style={{margin:'2%'}}>Password</label>
                    <input type="password" className="form-control" placeholder="Introduza password" onChange={(e)=>{setPassword(e.target.value);setMsg("")}}/>
                </div>

                <div className="form-group">
                  <p>{msg}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{margin:'5%'}}  onClick={(e)=>send(e,email,password)}>Entrar</button>
                <p className="forgot-password text-right">
                    Criar <Link to='/SignUp'>Conta</Link>
                </p>

               
           </section>    
    </Form>
    </>
    )
}