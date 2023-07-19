import React from 'react'

import {TextField, Button, Card} from "@mui/material"

import { useState } from 'react'
import axios from "axios"
import CardUser from '../Card/CardProduct'
import Spinner from '../Spinner/Spinner'

const Search = () => {
    const [value, setValue ] = useState ("");  //input estado inicial vacio
    const [userData , setUserData] = useState({});  //pasamos la respuesta de la api a un estado
    const [isLoading, setIsLoading] = useState(false);



    //console.log( userData);
                                             //capturo los cambions en el input
    const handleOnchange = (e) =>{          // e de evento es lo que se suseda en el input
       setValue(e.target.value);

   };

    const handleOnSubmit = (e) => {  //envia la info capturada
        e.preventDefault();  // no refresca la pagina

        const userInput = value.toLocaleLowerCase().replace(/ /g, "");  //quita los MAYUSCULAS en la busqueda
                                                                        //replace quita escapacios
        if(userInput){
            setIsLoading(true);
            
            axios(`https://api.github.com/users/${userInput}`)  //llamamos a la API
             .then((res)=> 
              setUserData(res.data))  //respuesta de api         
            }
            
            setValue("") // limpia el input a su estado inicial
            setIsLoading(false);

    };


  return (
    <div>

        <form className='search' onSubmit={handleOnSubmit}>
            <TextField
                className='Textfield'
                placeholder='Buscar'
                variant='outlined'
                value={value}            
                onChange={handleOnchange}/>


            <Button 
                type='submit'
                variant="contained"
                className='btn'>
                    Buscar
                </Button>
        </form>

        {isLoading ? <Spinner/> : null}

        
        {userData.id ? (<CardUser userData = {userData}/>) : null}
        
    </div>
  )
}

export default Search;