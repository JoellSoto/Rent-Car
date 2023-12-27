import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'



export default function SingleCar(props) {
  let i=[];
  const [ex,setEx]=useState([])
  const corpo=(res)=>{

    console.log(res)
    console.log(props.veiculoId)
    localStorage.setItem('carro',res.data[props.veiculoId-1].num);
        setVeiculos(
          {
            marca:res.data[props.veiculoId-1].marca,
            modelo:res.data[props.veiculoId-1].referencia,
            preco:res.data[props.veiculoId-1].preco_dia,
            detalhes:res.data[props.veiculoId-1].tipo_combustivel+", "+res.data[props.veiculoId-1].mudanca,
            ano:res.data[props.veiculoId-1].ano_fabrico,
           
          }
        
           
         );
       
            
            i.push(res.data[props.veiculoId-1].image1)
            i.push(res.data[props.veiculoId-1].image2)
            i.push(res.data[props.veiculoId-1].image3)
            i.push(res.data[props.veiculoId-1].image4)
            setEx(i);
            

     
         
          //console.log(ex)
         
    }

  const [veiculos,setVeiculos]=useState({
    marca:"",
    modelo:"",
    preco:"",
    detalhes:"",
    ano:""
  })
  useEffect(async ()=>
  await axios.get('http://gestao-aluguer.herokuapp.com/viaturas/').then((res)=>corpo(res)),[props.veiculoId])

      


      

   const imgs=(img)=>{
     let imagens=[];
     for(let i=0; i<4; i++)
        imagens[i]=
             <img
              className="d-block "
              src={img[i]}
              style={{ height:'100%',width:'100%' }} 
              alt="Imagem"
            />
        
  let vl=[];
 vl=imagens.map((item)=>
        <Carousel.Item interval={3200} style={{height:'150px',width:'250px'}}>
          {item}
            <Carousel.Caption>
             
            </Carousel.Caption>
      </Carousel.Item>
  )
      return vl;
      
          
   }
   
  const carrossel=(img)=>{
    return(
      <Carousel  style={{ height:'100%',width:'100%' }} >
                       
          {imgs(ex)}                     
                     
      </Carousel>
    )
  }

    return(
    <div className="text-center" style={{paddingRight:'50%',paddingTop:'7%'}}>
    
     <Form.Group controlId="formCategory1"   className="border border-primary border-2  rounded">
    <Form.Label class="fs-3">Marca </Form.Label>
    <Row style={{marginBottom:'5%'}}>
        <output>{veiculos.marca}</output>
    </Row>
  
  </Form.Group >
  <Form.Group controlId="formCategory2"  className="border border-primary border-2  rounded">
    <Form.Label class="fs-3">Modelo</Form.Label>
    <Row style={{marginBottom:'5%'}}>
        <output>{veiculos.modelo}</output>
    </Row>
  </Form.Group>



  <Form.Group controlId="formCategory2"  className="border border-primary border-2  rounded">
    <Form.Label class="fs-3">Detalhes</Form.Label>
    <Row style={{marginBottom:'5%'}}>
       <Col><output>{veiculos.preco +" MZN/Dia"}</output></Col> <Col><output>{veiculos.ano+", "+veiculos.detalhes}</output></Col>
    </Row>
  </Form.Group>


  <Form.Group controlId="formCategory2" >
    
    <Row style={{}}>
      <Col></Col>
      <Col ><output style={{height:'150px',width:'250px',marginTop:'6px'}} className="text-center ">{carrossel(ex)}</output></Col>
      <Col></Col>
        
    </Row>
  </Form.Group>


     
      <Link to="/Reserva" className="btn btn-primary" style={{marginTop:'3%'}}>Reservar</Link>
    
    </div>
    )
  }

