
import './CampoTexto.css'

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input type={props.tipo}placeholder={props.placeHolder}/>
    </div>
  )
}

export default CampoTexto