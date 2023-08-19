import csharp from '../../assets/skills/lang-csh.png'
import cplus from '../../assets/skills/lang-c++.png'
import c from '../../assets/skills/lang-c.png'
import java from '../../assets/skills/lang-java.png'
import kt from '../../assets/skills/lang-kt.png'
import net from '../../assets/skills/frame-.net.png'
import aspnet from '../../assets/skills/frame-asp.net.png'
import angular from '../../assets/skills/frame-angular.png'
import spring from '../../assets/skills/frame-spring.png'
import android from '../../assets/skills/frame-android.png'
import mysql from '../../assets/skills/db-mysql.png'
import sqlsrv from '../../assets/skills/db-sqlsrv.png'
import './Skills.css'

export default function Skills():JSX.Element{
  return (
    <div id='skills'>
      <h1 className="section_header">Habilidades</h1>
      <div className='photos'>
        <img src={java} alt='' className='skill'/>
        <img src={kt} alt='' className='skill'/>
        <img src={csharp} alt='' className='skill'/>
        <img src={cplus} alt='' className='skill'/>
        <img src={c} alt='' className='skill'/>
        <img src={spring} alt='' className='skill'/>
        <img src={aspnet} alt='' className='skill'/>
        <img src={net} alt='' className='skill'/>
        <img src={angular} alt='' className='skill'/>
        <img src={android} alt='' className='skill'/>
        <img src={mysql} alt='' className='skill'/>
        <img src={sqlsrv} alt='' className='skill'/>
      </div>
    </div>
  )
}