import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Nav from './Nav'
import BG from './imagens/3.jpg'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

export default function Pagina(props){

    //var carross=[];    
    const [veiculos,setVeiculos]=useState([])

     const  change=(nr)=>{
        props.setVeiculoId(nr)
        console.log(props.veiculoId)
    
     }
    const car=(modelo,caixa,local,nr)=>{
      
             
          return  (
            <Carousel.Item interval={2100}  style={{ height:'660px'}}   >
            <img
                className="d-block w-100"
                style={{ height:'500px',width:'800px' }} 
                src={local}
                alt="Carro"
                onMouseOver={() =>{ change(nr)}}
            />
            <Carousel.Caption>
                <h3>{modelo}</h3>
                <p>{caixa}</p>
                <Link to='/Veiculo' className='btn btn-primary'  onClick={ () =>{ change(nr)}}  onMouseOver={() =>{ change(nr)}}>
                    Detalhes Da viatura
                </Link>
            </Carousel.Caption>
            </Carousel.Item>

          )


    }
    

    useEffect( async ()=>
    await axios.get('http://gestao-aluguer.herokuapp.com/viaturas/').then((res)=>todosCarros(res))
    ,[])
    const todosCarros=(res)=>{
      let vei=[]
        for(let i=0; i<res.data.length;i++){
            vei.push(car(res.data[i].marca,res.data[i].preco_dia+" MZN/Dia",res.data[i].image1,i+1))

            setVeiculos(vei)
        }
        

      
        //return carross;    
    }
     

    const carrossel=()=>{
        return(
                            <div style={{ display: 'block', width:'65%', padding:'2%',height:'50%',marginLeft:'-7%' }}>
                    <h4></h4>
                    <Carousel >
                        {veiculos}
                    </Carousel>
                    </div>

        )
    }
   
    return(
        <div className="container" >
            <Nav/>
            {carrossel()}
            
        </div>
    )
}





	

