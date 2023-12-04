import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getAni } from "../../constants/db";


const aniItem = getAni();

const Ani = () => {
  return (
    <>
    <h2 style={{textAlign:'center', marginTop:'2rem', fontSize:'2rem'}}>Animal Toys</h2>
      <Card>
        <CardActionArea sx={{display: 'flex', flexWrap:'wrap', gap: '1rem', p:'2rem 0'}}>

          {aniItem.map(item => (
            <CardMedia sx={{border:'1px solid grey'}}>
              <img src={item.image} alt="image" title={item.title} />


              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>

              <CardActions>
                <Button variant="contained" color="success" >
                {item.btn}
                </Button>

              </CardActions>
            </CardMedia>
          ))}
        </CardActionArea>
      </Card>
    </>
  )
}

export default Ani