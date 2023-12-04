import {  Button, Card, Stack, Typography } from "@mui/material"
import {getMarvel} from '../../constants/db';
import './marvel.css';

const marvelData = getMarvel();


const Marvel = (props) => {
 
  return (
            <>
        <h2 style={{textAlign: 'center', fontSize: '2rem', marginTop:'1rem'}}>Marvel of toys</h2>
        
    
    <Stack direction={'row'}> 
    
        <Card  sx={{ padding: '4rem 0',   display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}> 

        
        {marvelData.map(item =>(
          <div className="Marvelitem" >
            <img src={item.image} alt="marvel" title={item.title}/>

              <Typography className="p" sx={{textAlign:'center', textTransform: 'capitalize', fontSize: '1.2rem'}}>
                {item.title}
              </Typography>
              <p>
                {item.price}
              </p>
              <Button variant="outlined" sx={{mb:'1rem'}}>{item.btn}</Button>
              </div>
           ))}
         
        </Card>
    </Stack>
    </>
  )
}

export default Marvel