import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1 className='title-app'>Componente básico hecho en React!
          <span>
            <img src={require(`./images/logo192.png`)} alt='' className='logo-react' width='50' height='50' />
          </span>
        </h1>


        <Testimonio
          image='maximo'
          name='Maximo Aranibe'
          country='Argentina'
          job='Desarollador FrontEnd'
          company='CoderHouse y Autodidacta'
          testimonio='Hola amigos, esta es una prueba de un testimonio hecho con React siguiendo el tutorial de Free Code Camp español, el cual me enseñó todos los fundamentos para aprender sobre la tecnología React, librería de JavaScript para construir interfaces de usuarios que se pueden actualizar y se pueden mostrar de forma muy eficiente, ya que React solo actualiza los componentes que deben ser actualizados.' />

        <Testimonio
          image='robert'
          name='Robert Salomon'
          country='Republica Dominicana'
          job='Ingenerio en sistemas'
          company='X Technology and Associates'
          testimonio='Siempre fui un apasionado de la tecnología, al terminar mis estudios en la escuela secundaria decidí anotarme a la universidad para darle rienda a mi pasión, después de unos años de esfuerzo logré mi primer trabajo como ingeniero en sistemas.' />

      </div>
    </div>
  );
}

export default App;
