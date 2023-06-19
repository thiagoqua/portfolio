import './Personal.css'

export default function Personal():JSX.Element{
  return (
    <div className="personal" id="personal">
      <div className="block-info-larger">
        <h2>Formacion academica</h2>
        <ul>
          <li>
            <h3 className="item">Secundario</h3>
            <div className='description'>
              <b>“Instituto Santa María Goretti E.E.S.O.P.I. 8097”</b> , Arroyo
              Seco, Santa Fe, Argentina.
              <br />
              <b>2015</b> - <b>2019</b>.
              <br />
              <b>Bachiller en Ciencias Sociales.</b>
            </div>
          </li>
          <li>
            <h3 className="item">Terciario</h3>
            <div className='description'>
              <b>"Instituto Politécnico Superior – UNR”</b>, Rosario, Santa Fe,
              Argentina.
              <br />
              <b>2020</b> - <b>2023</b>.
              <br />
              Me queda una materia para recibirme.
              <br />
              <b className="grade">Analista Universitario en Sistemas.</b>
            </div>
          </li>
        </ul>
      </div>
      <div className="block-info">
        <h2>Idiomas</h2>
        <div className='description'>
          <ul>
            <li>
              <h3 className="item">Castellano</h3>
              <div>
                <b>Nativo.</b>
              </div>
            </li>
            <li>
              <h3 className="item">Inglés</h3>
              <div>
                <b>Intermedio B2.</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="block-info-1">
        <h2>Disponibilidad</h2>
        <div className='description'>
          <ul>
            <li>
              <h3 className="item">Full-Time.</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="block-info-larger-1">
        <h2>Intereses</h2>
        <div className='description'> 
          <ul>
            <li>
              <h3 className="item">Desarrollo de apps en general.</h3>
            </li>
            <li>
              <h3 className="item">A nivel desarrollo web</h3>
              <div>
                <b>Full Stack.</b>
              </div>
              <div>
                <b>Backend.</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>

  )
}