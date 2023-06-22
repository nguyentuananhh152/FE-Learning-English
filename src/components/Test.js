import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@material-ui/core';
import { Button, Table } from '@mui/material';


export default function Test() {
    const[ListWord, setWord]=useState([])
    const fillListWord=[...ListWord]
    const numberTest = 10;
    const  [score, setScore] = useState(0)
    const [valueinput,setValueInput]=useState(fillListWord.fill(''))

    function setTextInput(w,e,index){
        w.valueInput=e.target.value
        const newArrValue=[...valueinput];
        newArrValue[index]=e.target.value;
        setValueInput(newArrValue)

    }
  useEffect(()=> {
    fetch("http://localhost:8081/test?number="+numberTest)
        .then(res => res.json())
        .then((result) => {
            setWord(result);
            // console.log(result)
        }
    )
    const unloadCallback = (event) => {
        event.preventDefault();
        event.returnValue = "";
        return "";
      };
    
      window.addEventListener("beforeunload", unloadCallback);
      return () => window.removeEventListener("beforeunload", unloadCallback);
  },[])

  const check = () => {
    var i = 0;
    ListWord.map((w, index) => {
        // console.log(w);
        if (w.textE === w.valueInput) {
            i++;
            console.log(index, true);
        } else {
            console.log(index, false);
        }
    })
    // console.log("Score: " + i)
    setScore(i)
    // console.log(score)
  }

  return (
    <Container>
        <form>
            <h1 style={{color:"blue"}}>Test</h1>
            {ListWord.map((w,index)=>{
            return  <Table border="1px" style={{whiteSpace: "normal", wordWrap: "break-word"}}>
                <tr>
                    <td width="130px">
                        <TextField inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold'}}} disabled="disabled" value={w.textVN} ></TextField>
                    </td>
                    <td width="500px">
                        <TextField id="outlined-basic" label="Answer" variant="outlined" width="400px"
                        value={valueinput[index]}
                        onChange={(e) => setTextInput(w,e,index)}
                        />
                    </td>
                </tr>
            </Table>
                        
            },
            
            )}
            <form>
            <br></br>
            <label>Score</label>
            <br></br>
            <TextField id="outlined-basic" inputProps={{min: 0, style: { textAlign: 'center', fontWeight: 'bold', fontSize: 30}}} label="" variant="outlined" width="400px" disabled="disabled" value={score}/>
            </form>
            <form>
            <br></br>
            <br></br>
            <Button variant="contained" color="error" size='large' onClick={check}>Submit</Button>
            </form>
            <div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            
        </form>
    </Container>
  
  );
}
