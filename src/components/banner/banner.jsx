import Ani from '../ani/ani'
import Dc from '../dc/dc'
import Marvel from '../marvel/marvel'
import './banner.css'

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <h1>Welcome To The Toyrus Online Store</h1>
    </div>
    <Marvel/>
    <Dc/>
    <Ani/>
    </>
  
  )
}

export default Banner