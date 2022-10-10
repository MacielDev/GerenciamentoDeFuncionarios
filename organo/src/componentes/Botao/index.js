import "./Botao.css"
import CheckIcon from '@mui/icons-material/Check';

const Botao =(props) => {
  return (
    <button className="botao">
      <div>
        {props.children}
        <CheckIcon/>
      </div>
    </button>
  )
}

export default Botao