import { Typography } from '@mui/material';
import './showcard.css';





const Showcard = ({ detail, setClose }) => {
  return (
    <div className="Showcard" onClick={()=> setClose(false)}>
    <div className="item">
       {detail.map(item =>(
         <div className="img">
       
         <img src={item.image} alt="" />
         <Typography>{item.title}</Typography>
     </div>
    
       ))}
    </div>
</div>
  );
}

export default Showcard;