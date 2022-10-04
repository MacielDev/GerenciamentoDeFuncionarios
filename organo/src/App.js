import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto tipo="text" label="Nome" placeHolder="Digite o seu nome"/>
      <CampoTexto tipo="text" label="Cargo" placeHolder="Digite o seu nome"/>
      <CampoTexto tipo="text" label="Imagem" placeHolder="Digite o endereço da sua imagem"/>
      
    </div>
  );
}

export default App;
