import "./Colaborador.css"

const Colaborador = ({imagem,nome,cargo,corTime}) =>{
  
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor:corTime}}>
        <img src={imagem} alt={nome}/>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador