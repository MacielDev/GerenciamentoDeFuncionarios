import './CampoTexto.css'

const CampoTexto = (props) => {
  


  const aoDigitado =(evento) =>{
    props.aoAlterado(evento.target.value)
  }
  

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input 
        onChange={aoDigitado} 
        required={props.obrigatorio} 
        type={props.tipo}
        placeholder={props.placeHolder}
        value={props.valor}/>
    </div>
  )
}

export default CampoTexto