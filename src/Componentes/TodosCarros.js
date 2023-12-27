import axios from 'axios'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function TodasViaturas(props){
    let navigate = useNavigate();
    //let img=0;
    const car=()=>{
        navigate("/Veiculo", { replace: true })
    }
    const corpo=(res)=>{
     let obj=[];
        console.log(res)
        for(let i=0; i<res.data.length;i++){

            obj.push(<tr style={{cursor: 'pointer'}} onClick={()=>{props.setVeiculoId(i+1);console.log(props.veiculoId);car()}} onHover={props.setVeiculoId(i+1)}>
                        <th scope="row">{i+1}</th>
                        <td>{res.data[i].marca}</td>
                        <td>{res.data[i].referencia}</td>
                        <td>{res.data[i].preco_dia+ " MZN"}</td>
                    </tr>)
            setVeiculos(obj)
        }


    }
    
    const [veiculos,setVeiculos]=useState([])
    useEffect( async ()=>
    await axios.get('http://gestao-aluguer.herokuapp.com/viaturas/').then((res)=>corpo(res))
    ,[])


    
    
        
    //console.log(res.data)
   
   
     //makeGet()
   
    return(<div className="container">
      <Nav/>
    

    <table class="table table-striped table-dark" style={{marginTop:"-0.2%"}}>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">preço/Dia</th>
            </tr>
        </thead>
        <tbody>
            
             {veiculos}
       
        </tbody>
    </table>
    
    </div>)
   

}