import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';





const txt=()=>{
    return(
        <div className="text-center" style={{ paddingRight:'50%',paddingTop:'2%'}}>
           <h1 style={{color: "#f5f5f5" ,fontFamily: "Jordana"}} > Termos e condições do Aluguer </h1>


           <div  style={{color: "#f5f5f5",fontFamily: 'Arial'}} > O dia de aluguer é calculado sobre 24 horas a partir da data e hora do levantamento do veículo.
                O cliente tem direito a 150 km por dia de aluguer, acumuláveis no período de aluguer.</div>
           <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}> Documentos necessários para o aluguer
                Cópia do B.I ou Passaporte, cópia da carta de condução e uma carta de solicitação do aluguer, caso seja empresa.</div>

           <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}>Condições de devolução da viatura
O Cliente compromete-se a devolver o veículo em boas condições de utilização e limpeza, no local e data acordado, com o depósito de combustível cheio. O não cumprimento destas regras implica a aplicação de taxas adicionais. O Cliente é responsável pelo pagamento de todas as multas de trânsito/estacionamento que ocorram durante o aluguer.<br/> 
           </div>

            <div style={{color: "#f5f5f5",fontFamily: 'Arial'}}>As tarifas excluem:<br/>
- Serviço de entrega ou retoma fora das nossas instalações (1,000 MT/ trajeto)<br/>
- Danos causados pelo cliente<br/>
- Parqueamentos, multas e reboque da responsabilidade do Cliente<br/>
- Taxa para abertura da viatura se a chave for deixada no interior: 3,000MT<br/>
- Custo da limpeza, no caso de o Veículo ser devolvido num estado inaceitável de sujidade (para além do uso normal)<br/>
No caso de serviço de motorista aplicam-se os valores atrás referidos.  <br/>
        
O Cliente compromete-se a zelar pelo bom estado da viatura, a fazer um uso prudente do veículo, assegurando-se que o veículo é fechado em local seguro quando não esteja a ser utilizado, e a cumprir as normas do Código da Estrada e demais legislação aplicável.
O NÃO CUMPRIMENTO DESTES TERMOS TORNA NULOS TODOS OS SEGUROS, TORNANDO O CLIENTE RESPONSÁVEL PELOS DANOS CAUSADOS NO VEÍCULO.
<br/>
A JEN Park reserva-se o direito de substituir modelos de veículos com especificações similares e/ou modificar taxas adicionais sem aviso prévio.
<br/> adequadamente com o logotipo do Parque.  <br/>
Condições especiais para clientes BCI
Pague com cartões de Débito ou Crédito BCI e tenha desconto imediato de 10% nos nossos serviços.
Os descontos não abrangem os produtos/ serviços em promoção.
</div>
            </div>

    )
}

export default function Termos(){


    return(
        <div className="container">
            <Nav/>
            
      
            
            {txt()}
        </div>
    )
}