import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from 'react'

 
const Formulario = (props) => {

  const [nome,setNome] = useState("")
  const [cargo,setCargo] = useState("")
  const [imagem,setImagem] = useState("")
  const [time,setTime] = useState("")

 

  const aoSalvar = (evento) => {
    evento.preventDefault()

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time}
    )
      setNome("")
      setCargo("")
      setImagem("")
      setTime("")
  }
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true} 
          tipo="text" 
          label="Nome" 
          placeHolder="Digite o seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
          
        <CampoTexto 
          obrigatorio={true} 
          tipo="text" 
          label="Cargo" 
          placeHolder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          tipo="text"
          label="Imagem"
          placeHolder="Digite o endereço da sua imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.nomesDostimes}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
export default Formulario;
