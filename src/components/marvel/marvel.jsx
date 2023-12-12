import { Button, Card, Stack, Typography } from "@mui/material";
import {  RemoveRedEye } from "@mui/icons-material";
import { useState } from "react";
import Showcard from "../showCard/showcard";
import { getMarvel } from '../../constants/db';


const marvelItem = getMarvel();
const Marvel = () => {
 

  const [close, setClose] = useState(false)


  const [detail, setDetail] = useState([])

  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }
  
 


  return (
    <>
    {
      close?
           <Showcard detail={detail} setClose={setClose}/>
        :null
    }
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '1rem' }}>Marvel of toys</h2>

      <Stack direction={'row'}>
        <Card sx={{ padding: '4rem 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        
          {marvelItem.map(item => (
            <div key={item.id} className="Marvelitem">
                
              <div className="img">
                <img src={item.image} alt="marvel" title={item.title} />
                <div className="aye__overlay">
             
                  <RemoveRedEye className="aye" onClick={()=> view(item)} />
                </div>
              </div>
              <Typography className="p" sx={{ textAlign: 'center', textTransform: 'capitalize', fontSize: '1.2rem' }}>
                {item.title}
              </Typography>
              <p>
                {item.price}
              </p>
              <Button variant="outlined" sx={{ mb: '1rem' }}>{item.btn}</Button>
             
            </div>
          ))}
        </Card>
      </Stack>

      

    </>
  );
}

export default Marvel;