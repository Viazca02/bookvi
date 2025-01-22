
import img109 from './Imagenes/109.jpg'
import imgVi from './Imagenes/imgVi.png'
import linkedin from './Imagenes/linkedin.svg'
import './Banner.css'
import changuito from'./Imagenes/changuito.jpeg'

function Banner() {
  return (
    <div>
      <div className="Contenedor-Banner">
        <div className="Texto-Banner">
          <h2>¡Hola!</h2>
          <h1>Soy Viviana</h1>
          <h1>Design & UX Manager</h1>
          <a target="_blank" href="https://www.linkedin.com/in/viviana-azcona-40aa63183/">
            <div className="Linkedin">
              <img src={linkedin} altimg="linkedin" />
            </div>
          </a>
        </div>
        <div className="Imagen-Banner">
          <img src={imgVi} alt="imagen Vi" />
        </div>
      </div>


      {/* <div className="banner-container">
        <div className="imagen109">
          <img className="imagen1" src={img109} alt="banner principal" />
        </div>

        <div className="texto1">
          <div>
          <h1 className="titulo">
          Hola</h1>
          <h2>Te amo gracias</h2>
          </div>
          <div className="yomera">
          <img className="fotoperfil" src={changuito} alt="foto de perfil" />
          </div>
        </div>
       </div> */}
    </div>


		)
	
}

export default Banner