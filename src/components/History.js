import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@material-ui/core';
import { Button, Table } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),

//         },
//     },
// }));

export default function Test() {
    const[ListWord, setWord]=useState([])
    
  useEffect(()=> {
    fetch("http://localhost:8081/get-all-word-learned")
        .then(res => res.json())
        .then((result) => {
            setWord(result);
        }
    )   
  },[])

  return (
    <Container>
        <form>
            <h1 style={{color:"blue"}}>History</h1>
            
                <Table border="1px" style={{whiteSpace: "normal", wordWrap: "break-word"}}>
                    
                    <th>STT</th>
                    <th>English</th>
                    <th>VietNamese</th>
                    <th>Update</th>
                    <th>Delete</th>
                    {ListWord.map(w=>(
                    <tr>
                        <td width="50px">
                        <TextField disabled="disabled" inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} value={w.id} ></TextField>
                        </td>
                        <td width="300px">
                            <TextField inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} value={w.textVN} ></TextField>
                        </td>
                        <td width="600px">
                            <TextField inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} variant="outlined" width="400px" value={w.textE} />
                        </td>
                        <td>
                            <Button variant="contained" color="primary">Update</Button>
                        </td>
                        <td>
                            <Button variant="contained" color="error">Delete</Button>
                        </td>
                    </tr>
                    ))}
                </Table>
            
            
        </form>
    </Container>
  
  );
}
