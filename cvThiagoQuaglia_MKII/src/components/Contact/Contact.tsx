import lnkdn from '../../assets/icons/linkedin.png'
import ghub from '../../assets/icons/github.png'
import email from '../../assets/icons/email.svg'
import pdf from '../../assets/icons/resume.svg'
import './Contact.css'

export default function Contact():JSX.Element{
  return (
    <div className='contacts-ctx'>
      <div className='contacts'>
        <a href='https://www.linkedin.com/in/thiagoquaglia/' target='_blank'>
          <img src={lnkdn} alt='linkedin' className='icon'/>
        </a>
        <a href='https://github.com/thiagoqua' target='_blank'>
          <img src={ghub} alt='github' className='icon'/>
        </a>
        <a href='mailto:thiagoqua16@gmail.com' target='_blank'>
          <img src={email} alt='email' className='icon'/>
        </a>
        <a href='https://drive.google.com/drive/folders/1utlhZa14Va7hFCEMi-zy6O9Zf9d-I7gy?usp=drive_link' target='_blank'>
          <img src={pdf} alt='download' className='icon'/>
        </a>
      </div>
    </div>
  )
}