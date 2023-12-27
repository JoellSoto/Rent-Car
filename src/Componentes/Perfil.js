import React from 'react';
import { Container,Row,Col,Form } from 'react-bootstrap';
import {useState,useEffect} from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import axios from 'axios'



export default function Perfil(props){
 /* const json={
    'username':'default',
    'email':'default',
    'morada':'default',
    'bi':'default'
}*/

  
    const[perfil,setPerfil]=useState({
      'username':'',
      'email':'',
      'morada':'',
      'bi':''
    })


  let entrada=[]
  const makeGet= async ()=>{
  const res =await axios.get('http://gestao-aluguer.herokuapp.com/profile/'+localStorage.getItem("id"));
  setPerfil(
    {
      'username':res.data.cliente.nome+" "+res.data.cliente.apelido,
      'email':res.data.user.username,
      'morada':res.data.cliente.morada,
      'bi':res.data.cliente.tipo==1?'Singular':'Empresa'
   
    }) 
  console.log(res);
 }

 useEffect(()=>makeGet(),[])


    return(
      
    <div className="container">
        <Nav />
        {console.log(entrada)}
        <Container className="text-center ">
        <Row  style={{padding: '3%',width:'60%'}}>
       
        <Col>
            <h1 style={{marginBottom:'2%'}}>Perfil Do Usuario</h1>
        </Col>    
            <Form className="form">     
        
  <Form.Group controlId="formCategory1"   className="border border-primary border-2  rounded">
    <Form.Label class="fs-3">Nome </Form.Label>
    <Row style={{marginBottom:'5%'}}>
        <output>{perfil.username}</output>
    </Row>
  
  </Form.Group >
  <Form.Group controlId="formCategory2"  className="border border-primary border-2  rounded">
    <Form.Label class="fs-3">Email</Form.Label>
    <Row style={{marginBottom:'5%'}}>
        <output>{perfil.email}</output>
    </Row>
  </Form.Group>
 
  <Form.Group controlId="formCategory2"  className="border border-primary " >
    <Form.Label class="fs-3">Morada</Form.Label>
    <Row style={{marginBottom:'5%'}}>
        <output>{perfil.morada}</output>
    </Row>
  
  </Form.Group>


  <Form.Group controlId="formCategory2"  className="border border-primary ">
    <Form.Label class="fs-3">Tipo de Cliente</Form.Label>
    <Row style={{marginBottom:'5%'}}>
        <output>{perfil.bi}</output>
    </Row>

  </Form.Group>
  </Form>

   <Form.Group>
      <Row style={{marginTop:'5%'}}>
        <Col></Col>
        <Col><Link className='btn btn-primary' to='/History'>Histórico</Link> </Col>
        <Col></Col>
        
      </Row>
      </Form.Group>
       </Row>
        </Container>
        </div>      

    )
}