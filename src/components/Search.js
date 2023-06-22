import  {React,  useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Button } from '@material-ui/core';
import '../Style.css'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),

//         },
//     },
// }));

export default function SearchWord() {
    const[textE, setTextE]=useState('')
    const[textVN, setTextVN]=useState('')

    const handleClick=(e) => {
    e.preventDefault()
    const Word = {textE, textVN}
    console.log(Word)
    fetch("http://localhost:8081/search?keyword="+textE,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Word)
        
    }).then(res=>console.log(res.json))
    .then(()=> {
        console.log("Post " + textE + " success!");
        fetch("http://localhost:8081/search?keyword="+textE)
        .then(response => response.json()).then(json => {
            setTextVN(json.textVN)
            console.log("Get " + textVN + " success!");
        }).catch (e => {
            console.log("error", e)
        })
        
    })
  }
    

  return (
    <Container>
        <form>
            <h1 style={{color:"blue"}}>Search</h1>
            <TextField id="outlined-basic" label="English" variant="outlined"
            value={textE} 
            onChange={(e) => setTextE(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="VietNamese" variant="outlined" disabled="disabled"
            value={textVN}
            onChange={(e) => setTextVN(e.target.value)}
            />
        </form>
        <form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" onClick={handleClick}>Search</Button>
        </form>
        
    </Container>
  
  );
}
