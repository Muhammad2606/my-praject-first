import { Link } from 'react-router-dom'
import { logo } from '../../constants/logo'
import './navbar.css'
import { AcUnit } from '@mui/icons-material'
import { useState } from 'react'

const Navbar = () => {

  const [addClass, setAddClass] = useState(false)

  const  handlerAddClass = () =>{
      setAddClass(prev => !prev)
  }

  return (


    <div className={`navbar ${addClass ? 'height' : null}` }>
      <Link to={'/'}>
        <img src={logo} alt="logo" width={'150px'} />
      </Link>
      <div className='navbarNav'>
        <Link to={'/'}> <a href="">home</a></Link>
        <Link to={'../marvel/'}> <a href="#">marvel</a></Link>
        <Link to={'../ani/'}> <a href="#">animals</a></Link>
        <Link to={'../dc/'}> <a href="#">discovry</a></Link>
        
        {/* <Link to={''}> <a href="#">shop</a></Link> */}
      </div>
      <AcUnit className='bars' onClick={() => handlerAddClass(true)}/>
    </div>


  )
}

export default Navbar