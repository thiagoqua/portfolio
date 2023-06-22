import { Link } from 'react-router-dom'
import image from '../../assets/icons/not_found.png'
import './NotFound.css'

export default function NotFound():JSX.Element{
    return(
        <main>
          <div>
            <h1>Whoops!</h1>
            <h2>Parece que te perdiste..</h2>
            <Link to='/'>
              <button className='button'>volver a la pantalla principal</button>
            </Link>
          </div>
          <div className='image-ctx'>
            <img src={image} alt='404 image' className='wobble-vertical-left'/>
          </div>
        </main>
    )
}