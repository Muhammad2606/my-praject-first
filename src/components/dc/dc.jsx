import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getDc } from "../../constants/db";
import { RemoveRedEye } from "@mui/icons-material";
import { useState } from "react";
import Showcard from "../showCard/showcard";

const dcItem = getDc();
const Dc = () => {

  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  const view = (product) =>{
    setDetail([{...product}])
    setClose(true)
  }


  return (

    <>
    {
      close?
      <Showcard detail={detail} setClose={setClose}/>
      :null
    }
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '1rem' }}>Dc of toys</h2>
      <Card sx={{ padding: "4rem 2rem", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {dcItem.map(item => (
          <CardMedia sx={{ border: '1px solid grey' }} className="Marvelitem" >

            <div className="img">
              <img src={item.image} alt="marvel" title={item.title} />
              <div className="aye__overlay">

                <RemoveRedEye className="aye" onClick={()=> view(item)} />
              </div>
            </div>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="2" >
                {item.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ textAlign: 'center' }}>
              <Button variant="outlined" >{item.btn}</Button>

            </CardActions>
          </CardMedia>

        ))}



      </Card>
    </>
  )
}

export default Dc