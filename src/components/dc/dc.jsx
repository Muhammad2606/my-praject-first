import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {getDc} from  "../../constants/db";

const dcItem = getDc();
const Dc = () => {
  return (
    <>
        <h2 style={{textAlign:'center', fontSize: '2rem', marginTop: '1rem'}}>Dc of toys</h2>
       <Card  sx={{padding:"4rem 2rem", display: 'flex', flexWrap:'wrap', justifyContent:'center', gap: '1rem' }}>
        {dcItem.map(item => (
      <CardMedia sx={{border: '1px solid grey'}} >

          <img src={item.image} alt="" />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="2" >
          {item.price}
        </Typography>
      </CardContent>
        <CardActions sx={{textAlign:'center'}}>
        <Button  variant="outlined" >{item.btn}</Button>
        
      </CardActions>
      </CardMedia>
      
        ))}
       
     
    
    </Card>
    </>
  )
}

export default Dc