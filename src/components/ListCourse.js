import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";


export default function ListCourse() {
    const[ListCourse, setListCourse]=useState([])

  useEffect(()=> {
    const url = `http://localhost:8081/get-all-list-course`
    fetch(url)
        .then(res => res.json())
        .then((result) => {
            setListCourse(result);
            console.log(ListCourse);
        }
    )
  },[])

  const listlesson = () => {
    window.location.replace('/listlesson');
  }

  return (
    <Container>
        <form>
            <h1 style={{color:"blue"}}>List Course</h1>
            {ListCourse.map((w,index)=>{
            return  <Table border="1px" style={{whiteSpace: "normal", wordWrap: "break-word", marginTop:"50px"}}>
                <tr>
                    <td width="130px" colSpan={2}>
                        <img style={{ width: 350, height: 300 }} src={w.image} onClick={listlesson}/>
                    </td>
                </tr>
                <tr>
                    <td width="500px">
                        <TextField id="outlined-basic" inputProps={{min: 0, style: { textAlign: 'center'}}} label="Desctiption" variant="outlined" width="400px" fullWidth
                        value={w.description}
                        />
                    </td>
                    <td>
                    <TextField inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} disabled="disabled" fullWidth value={w.name} ></TextField>
                    </td>
                </tr>
            </Table>
                        
            },
            
            )}
        </form>
    </Container>
  
  );
}
