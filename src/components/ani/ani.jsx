import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getAni } from "../../constants/db";
import { RemoveRedEye } from "@mui/icons-material";
import { useState } from "react";
import Showcard from "../showCard/showcard";


const aniItem = getAni();

const Ani = () => {

  const [close, setClose] = useState(false)
  const [detil, setDetil] = useState([])

  const view = (product) =>{
    setDetil([{...product}])
    setClose(true)
  }
  

  return (
    <>
    {
      close?
      <Showcard detail={detil} setClose={setClose}/>
      :null
    }
    <h2 style={{textAlign:'center', marginTop:'2rem', fontSize:'2rem'}}>Animal Toys</h2>
      <Card>
        <CardActionArea sx={{display: 'flex', flexWrap:'wrap', gap: '1rem', p:'2rem 0'}}>

          {aniItem.map(item => (
            <CardMedia sx={{border:'1px solid grey'}} className="Marvelitem">

          <div className="img">
              <img src={item.image} alt="marvel" title={item.title} />
              <div className="aye__overlay">

                <RemoveRedEye className="aye"  onClick={() => view(item)} />
              </div>
            </div>

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