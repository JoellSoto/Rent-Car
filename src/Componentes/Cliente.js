import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'




export default function Cliente(props){


    
   
    let navigate = useNavigate();
    const[nome,setNome]=useState("")
    const[morada,setmorada]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[apelido,setApelido]=useState("")
    const[cliente,setCliente]=useState(1)
    const[msg,setMsg]=useState("")
    
    const entrar=async ()=>{ 
        await axios.post('http://gestao-aluguer.herokuapp.com/signin/',{
            "username":email,
            "password":password
        }).then(response=>{ response.data.status=='ok'?localStorage.setItem("id",response.data.num):setMsg("erro! estranho")})
        console.log("o ID e "+localStorage.getItem("id"))
    }
    

    const sucesso=()=>{
        entrar()
        navigate("/HomePage", { replace: true })
    }
    const send= async(e)=>{

        const json={
            'username':email,
           'password':password
        }
        props.setLogin(json)                              
        e.preventDefault()
        await axios.post('http://gestao-aluguer.herokuapp.com/register/',{
            "email":email,
            "password":password,
            "nome":nome,
            "apelido":apelido,
            "morada":morada,
            "tipo":cliente
        }).then(response=>{ response.data.status=='ok'? sucesso():setMsg("Erro!  Modifique o "+response.data.font) })

        console.log("email "+email,
        "password "+password,
        "nome "+nome,
        "morada "+morada,
        "tipo "+cliente,
        'apelido'+apelido)
 
    
    }
 
const inputText =(label,value,id)=>{

   return(
    <Form.Group  as={Col} controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type="text"   onChange={(e)=>{value(e.target.value);setMsg("")}}/>
  </Form.Group>
  )
 }

 const cEmail =(value,id)=>{
     return(
        <Form.Group  as={Col} controlId={id}>
            <Form.Label >Endereço de Email</Form.Label>
            <Form.Control type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={(e)=>{value(e.target.value)}}/>
        </Form.Group>

     )
 }
const cPassword=(value,id) => {
    return(
    <Form.Group  as={Col} controlId={id}>
      <Form.Label >Password</Form.Label>
      <Form.Control type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" onChange={(e)=>{value(e.target.value);setMsg("")}} />
    </Form.Group>
    )
}



 const inputText2 =(label,value,id)=>{
    return(
    <Form.Group   controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text"   onChange={(e)=>{value(e.target.value);setMsg("")}}/>
    </Form.Group>)
 }
const id=()=>{

  
    return(
        <div className="p-2" as={Col} style={{width: '32%',marginLeft:'-1.5%',marginTop: '3%',height: ''}}>
            <select class="form-select" aria-label="Default select example">
                <option value="1" onClick={(e)=>setCliente(1)}>Individual</option>
                <option value="2" onClick={(e)=>setCliente(2)}>Empresa</option>
            </select>
        </div>)
}

const data=()=>{


    return(
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <input placeholder="Select date" type="text" id="example" class="form-control"/>
            <label for="example">Try me...</label>
            <i class="fas fa-calendar input-prefix"></i>
    </div>
    )
}



return(
    <Container   style={{width: '70%',color:'#fff',paddingTop:'3%'}}>

       
    <div class="center" style={{margin:'0 auto',backgroundColor:'#090909'}}>    
        <Row>
            <h1 className="text-center" style={{marginBottom:'5%'}}>Dados Do Cliente</h1>
        </Row>
        <Row  xs={1} md={3}><Col>
            {inputText("Nome",setNome,"name")}</Col> 
         
           
            <Col>{cEmail(setEmail,"email")}</Col> 

            <Col>{cPassword(setPassword,'password')}</Col>
        </Row>

        <Row>
            
        </Row>

        <Row xs={1} md={2} style={{marginTop:'2%'}}>
            
            <Col>
              {inputText2 ("Apelido",setApelido,"apelido")}
            </Col>


            <Col>
                {inputText2 (" Morada",setmorada,"morada")} 
            </Col> 

            

        </Row>

        <Row>
            <Col><p>{msg}</p></Col>
        </Row>
        
        <Row xs={1} md={2}>


     

        <Col>
            {id()} 
        </Col>

        
            
            
        </Row>
            
       
        
    </div>

     <Row>
             <Col style={{margin:'0 auto',marginTop:'5%'}} xs={1} md={2}>
                <Link class="btn btn-primary" onClick={(e)=>{send(e)}} to='/HomePage'>Criar Conta</Link>
             </Col>    
     </Row>    
    
    </Container>
)

}