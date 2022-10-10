import "./Time.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && <section
      className="time"
      style={{ backgroundColor: props.time.corPrimaria }}
    >
      <h3 style={{ borderColor: props.time.corSecundaria }}>
        {props.time.nome}
      </h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador,index) => (
          <Colaborador
            key={index}
            corTime={props.time.corSecundaria}
            colaborador={colaborador.nome}
            imagem={colaborador.imagem}
            cargo={colaborador.cargo}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
