import Contact from "../../components/Contact/Contact";
import Navbar from "../../components/Navbar";
import Personal from "../../components/Personal/Personal";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./Home.css";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar inProjectPage={false}/>
      <div className="start circle-in-animation">
        <div transition-style="">
          <div className="whoami">
            <h1 className="name">Thiago Quaglia</h1>
            <h2 className="profession">Junior Software Developer</h2>
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="about" id="about">
          <div>
            <p>
              Mi nombre es Thiago Quaglia y desde pequeño que soy muy aficionado
              a la tecnología, lo que me ha permitido inclinarme por la
              programación a la hora de comenzar con los estudios.
            </p>
            <p>
              Actualmente, finalizando la carrera de "Analista Universitario en
              Sistemas".
            </p>
            <p>
              Estoy en busca de mi primer experiencia laboral en el ámbito de
              desarrollo de software, que me permita incorporar conocimientos
              nuevos y ampliar y profundizar los adquiridos.
            </p>
          </div>
        </div>

        <Personal />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </>
  );
}
