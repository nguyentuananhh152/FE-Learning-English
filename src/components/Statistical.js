import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@material-ui/core';
import '../Style.css';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),

//         },
//     },
// }));

export default function Statistical() {
    const[statistical, setStatistical]=useState('')
    
  useEffect(()=> {
    fetch("http://localhost:8081/statistical")
        .then(res => res.json())
        .then((result) => {
            setStatistical(result);
            console.log(result.json)
        }
        )   
  },[])

  return (
    <Container className='MuiContainer-root'>
        <form>
        <h1>Number of words learned today</h1>
        <TextField id="outlined-basic" inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold', fontSize: 30}}} label="" variant="outlined" width="400px" disabled="disabled" value={statistical/2} ></TextField>
        </form>
    </Container>
  
  );
}
