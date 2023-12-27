import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css';

export default function Sobre(){

    const txt=()=>{
        return(
            <div className="text-center" style={{paddingRight:'60%',paddingTop:'3%'}}>
               <h1 style={{color: "#f5f5f5" ,fontFamily: "Jordana"}} > JEN PARK </h1>


               <div  style={{color: "#f5f5f5",fontFamily: 'Arial'}} > A JEN Park apresenta-se como uma empresa responsável pelo aluguer seguro de viaturas.</div>
               <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}> A JEN Park chegou em 2020 em Moçambique<br/> Tem como principal objectivo proporcionar <br/> à população local um serviço seguro e confiável.</div>
               <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}>Os nossos servicos estão disponíveis 24 horas, todos os dias da semana.</div>
               <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}>O Parque está situado em Maputo, dispõe de servicos de Aluguer ou rent-a-car  a precos acessiveis. </div>
               <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}> Este programa tem como principais funções, a adição de novos Clientes, <br/> procura, edição, remoção e a ordenação de aluguer, visualização dos dados das viaturas.<br/> 
				<br/>
				O programa foi feito de raíz até o seu término pelos estudantes do curso de Engenharia Informática   do ISCTEM.<br/></div>

                <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}>Nureen Govan, Joel Soto e Edson Almeida  <br/>
			
            	As imagens, cores e Layouts foram pensados e escolhidos para combinar <br/> adequadamente com o logotipo do Parque.  </div>
                </div>

        )
    }
    
    return(
        <div className="container">
              <Nav/>
            {txt()}
              
        </div>
    )
}