import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../constants/logo'
import './navbar.css'

const Navbar = () => {
  return (


    <Stack direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{  position: 'sticky', top: '0' , zIndex: '9999', padding: '1rem', width: '100%', bgcolor: 'white'}}
    >
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
    </Stack>


  )
}

export default Navbar