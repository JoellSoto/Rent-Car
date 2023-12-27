import Nav from './Nav'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
import axios from 'axios'



export default function History() {
    let obj=[];
   const dataa=(di)=>{
    let data=di;
    const array1 = data.split("-");
    let ano = array1[0];
    let mes = array1[1];
    let dia = array1[2].substring(0,2)
    return dia+"/"+mes+"/"+ano
   }

    const [veiculos,setVeiculos]=useState([])

        const corpo=(res)=>{
            
               console.log(res)
               for(let i=0; i<res.data.length;i++){
       
                   obj.push(<tr style={{cursor: 'pointer'}} >
                               <th scope="row">{i+1}</th>
                               <td>{res.data[i].marca}</td>
                               <td>{res.data[i].referencia}</td>
                               <td>{res.data[i].valor+" MZN"}</td>
                               <td>{dataa(res.data[i].created) }</td>
                               <td>{res.data[i].motorista_id=='None'?'Sem Motorista':res.data[i].motorista_id}</td>
                               <td>{res.data[i].periodo_aluguer+ " DIAS"}</td>
                           </tr>)
                   
                   
               }   setVeiculos(obj)
            
            }
               
               useEffect(
                async() =>
                await axios.get('http://gestao-aluguer.herokuapp.com/profile/' + localStorage.getItem("id") + '/alugueres/').then((res)=>corpo(res)), [])
               

    return ( 
    <div className="container">
        <Nav/>
         <Row>
        <Col></Col>
        <Col><h1>HISTÓRICO</h1></Col>
        <Col></Col>
        </Row>  

        <table class="table table-striped table-dark" style={{marginTop:"1.2%",marginLeft:'-4.4%'}}>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Valor Pago</th>
                <th scope="col">Dia Do Aluguer </th>
                <th scope="col">Nome DO Motorista</th>
                <th scope="col">Periodo de Aluguer</th>
            </tr>
        </thead>
        <tbody>
            
            {veiculos}
       
        </tbody>
        </table>
    </div>)
    }