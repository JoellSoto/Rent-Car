import Pagina0 from './Componentes/SignIn'
import HP from './Componentes/HomePageCliente'
import House from './Componentes/available/MainAvailable'
import 'bootstrap/dist/css/bootstrap.min.css'
import BG from './Componentes/imagens/1.jpg'
import NovoUser from './Componentes/Cliente'
import {HashRouter as Router ,Route,Link,Routes} from 'react-router-dom'
import User from "./Componentes/Perfil"
import Sobre from './Componentes/AboutUs'
import {useState} from 'react'
import Viaturas from './Componentes/TodosCarros'
import Historico from './Componentes/Historico'
import Reserva from './Componentes/Reserva'
import Termos from './Componentes/Termos'





/*function useAsyncState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const setter = x =>
    new Promise(resolve => {
      setValue(x);
      resolve(x);
    });
  return [value, setter];
}*/



export default function App() {

    const[veiculoId,setVeiculoId]=useState(-1)


     const [login,setLogin]=useState(
        {'username':'default',
        'password':'default'});
   

    const[id,setId]=useState(-1)
     

    return(<div style={{
        backgroundImage: 'url('+BG+')',
        backgroundSize: "cover", 
        height: "101vh",
        color: "#f5f5f5"
      }}>
         

      
        <Routes>
          <Route  path='/SignUp'   element={<NovoUser   setVeiculoId={setVeiculoId} veiculoId={veiculoId} setLogin={setLogin} />}/>
          <Route path='/' element={<Pagina0  setId={setId} setVeiculoId={setVeiculoId}/>}/>
          <Route path='/Veiculo' element={<House veiculo={veiculoId}/>}/>
          <Route path='/HomePage' element={<HP  veiculoId={veiculoId} setVeiculoId={setVeiculoId}/>}/>
          <Route path='/User'   element={<User  id={id}/>}/>
          <Route path='/AboutUs' element={<Sobre/>}/>
          <Route path='/Viatura' element={<Viaturas veiculoId={veiculoId} setVeiculoId={setVeiculoId}/>}/>
          <Route path='/History' element={<Historico />}/>
          <Route path='/Reserva' element={<Reserva veiculoId={veiculoId}/>}/>
          <Route path='/Termos' element={<Termos />}/>

        </Routes>  
      
         


    
     
    
    
    
    </div>);
}