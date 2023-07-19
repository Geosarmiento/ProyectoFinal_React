import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';



const CardProduct = ( { cajas } ) => {

  return (
<>    

    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>

        <CardMedia
          component="img"
          image={cajas.img}
          alt="green iguana"
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
          {cajas.nombre}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          {cajas.descripcion}
           </Typography>
           
            <Typography variant="body2" color="text.secondary">
           {cajas.precio}
          </Typography>

        
        </CardContent>
       
        
      </CardActionArea>
    
    </Card>
   
   
    </>

  );
}

export default CardProduct;