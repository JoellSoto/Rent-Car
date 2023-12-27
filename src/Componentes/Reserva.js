import { useState, useEffect } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'




export default function Reservar(props) {
const[valor,setValor]=useState("")
const[motorista,setMotorista]=useState(0)
const[combustivel,setCombustivel]=useState(-1)
const [tempo,setTempo]=useState(-1)
console.log("reseva: "+props.veiculoId);
const res= async() => await axios.post('http://gestao-aluguer.herokuapp.com/alugar/'+ localStorage.getItem('id'),{
    "viatura_id":localStorage.getItem('carro'),
    "combustivel":combustivel,
    "motorista_id":motorista,
    "periodo":tempo
}).then(response=>response.data.status=='ok' ?setValor("O valor a pagar é: "+response.data.valor+" MZN, Reserva Feita com Sucesso"):console.log(response))
console.log("reseva: "+props.veiculoId);

const numero =(lbl,value)=>{
    return(
       <Form.Group  as={Col} >
           <Form.Label >{lbl}</Form.Label>
           <Form.Control type="number" class="form-control"  onChange={(e)=>{value(e.target.value)}}/>
       </Form.Group>

    )
}

return(<div className="container">
  <Nav/>

  <div class="center" style={{margin:'0 auto',backgroundColor:'#090909'}}>    
        <Row>
            <h1 className="text-center" style={{marginBottom:'5%',marginLeft:'-5%'}}>RESERVA</h1>
        </Row>
        <Row  xs={1} md={3} className="text-center">
         
           <Col>
                <div className="p-2" as={Col} style={{width: '63%',height: '',marginTop: '-2%'}}>
                <Form.Label >Condutor</Form.Label>
                    <select class="form-select" aria-label="Default select example">
                        <option value="0" onClick={(e)=>setMotorista(0)}>Sem Motorista</option>
                        <option value="1" onClick={(e)=>setMotorista(1)}>Com Motorista</option>
                    </select>
                </div>
            </Col>
            
           
            <Col>
                <div style={{width: '63%',marginTop: '0%',height: ''}}>
                    {numero("Litros De Combustivel",setCombustivel)}
                </div>
            </Col>     
            <Col>
                <div style={{width: '63%',marginTop: '0%',height: ''}}>
                    {numero("Dias De Aluguel",setTempo)}
              </div>    
            </Col>
        </Row>

        <Row>
            
        </Row>
        <Row>
            
        </Row>

    

        <Row xs={1} md={3} style={{paddingTop:'5%'}}>
            <Col></Col>     
            <Col><h5>{valor}</h5></Col>
            <Col></Col>
        </Row>
        
        <Row xs={1} md={2}>


     

        <Col>
        
        </Col>

        
            
            
        </Row>
            
       
        
    </div>
    <Row xs={1} md={3} style={{marginTop:'12%',marginRight:'11%'}} className="text-center">
            
            <Col>
             
            </Col>

            <Col >
             <button onClick={()=>res()} className="btn btn-primary">Alugar</button>
             </Col>


            <Col>
            
            </Col> 

            

        </Row>
</div>)
}