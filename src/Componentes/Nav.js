import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './imagens/logo.jpeg'
import {Link} from 'react-router-dom'


export default function Nav(){
    const acao=()=>{
        localStorage.removeItem("id");
    }


    return(
        <div  class="container  bg-primary" style={{margin:0,width:'100vw',marginLeft:'-10%'}}>
            <nav  class='navbar navbar-expand-lg navbar-dark bg-primary' style={{width:'100vw',backgroundColor:'#050505',height:'50px'}}>
                <Link class="navbar-brand" to='/HomePage'><img src=
                    {Logo}style={{width:'15%',height:'2%',padding:'0',height: '15%',marginLeft:'1%',marginTop:'4%'}} />
                </Link>
                 
                <button class='navbar-toggler' type='button' data-toggle="collapse" data-target='#navbarSite' >
                        <span class='navbar-toggler-icon'></span>
                </button>
               

                <div  class='collapse navbar-collapse' id='navbarSite'>
                    <ul  class='navbar-nav nav justify-content-center ' style={{paddingLeft:'40%'}}>
                        
                        
                        <li class='nav-item flex justify-center px-2'><Link class='nav-link' to='/User'>Perfil</Link></li>
                        <li class='nav-item flex justify-center px-2'><Link class='nav-link' to='/Viatura'>veiculos Disponíveis</Link></li>
                        <li class='nav-item flex justify-center px-2'><Link class='nav-link' to='/Termos'>Termos e Condições</Link></li>
                        <li class='nav-item mr-auto text-nowrap px-2'style={{/*paddingLeft:'130%'*/}}><Link class='nav-link' to="/AboutUs">Sobre Nós</Link></li>
                        <li class='nav-item mr-auto px-2' style={{/*paddingLeft:'10%'*/}}><Link class='nav-link' to="/" onClick={()=>acao()}>Sair</Link></li>
                    </ul>
                </div>
                
            </nav>

        </div>
    )
}

