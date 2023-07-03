import  React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@material-ui/core';
import { Button, Table } from '@mui/material';
import Image from "material-ui-image";
import Stack from '@mui/material/Stack';
import logo from '../img/SQL_logo.png'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

  const listlesson = () => {
    window.location.replace('/listlesson');
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const home = () => {
    window.location.replace('/')
  }
  
  const listcourse = () => {
    window.location.replace('/listcourse')
  }
  
  const SeeMore = () => {
    const[SeeMore, setListLesson]=useState([])

    useEffect(()=> {
      const url = ``;
      fetch("http://localhost:8081/get-list-lesson?id=1")
          .then(res => res.json())
          .then((result) => {
              setListLesson(result);
              console.log(SeeMore);
          }
      )
    },[])
    const classes = useStyles();
    return(
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <AppBar position="static" color='white'>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button onClick={home}>
                <img src={logo} width='100px'/>
              </Button>
              <Button color="inherit" onClick={listcourse} 
                style={{
                  fontWeight: "bold",
                }}
              >Khóa Học</Button>
            </Typography>
            <Stack spacing={3} direction="row"
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
            >
                <SearchIcon />
                <NotificationsIcon></NotificationsIcon>
                <AccountCircleIcon></AccountCircleIcon>
            </Stack>
          </Toolbar>
        </AppBar>
        <div
            style={{
                width: "100vw",
                height: "100vh",
                margin: "40px",
            }}
        >
            <h1 style={{fontSize: "40px"}}>Khóa Học SQL cơ bản</h1>
            <div
                style={{
                    width: "100vw",
                    marginLeft: "80px",
                    marginTop: "40px",
                }}
            >
                <h2>Bạn sẽ học được gì?</h2>
                <div 
                    style={{
                        width: "700px",
                        marginLeft: "80px",
                        marginTop: "40px",
                        borderStyle: "solid",
                        borderColor: "black",
                        padding: "10px",
                    }}
                >
                    <p>Giúp bạn hiểu rõ bản chất SQL, tính ứng dụng, phân loại phổ biến trong thực tế, các lưu ý trong SQL cần nhớ.</p>
                    <p>Biết được các câu lệnh từ cơ bản trong SQL như Select, chọn dữ liệu không trùng nhau với DISTINCT. Biết được tư duy tìm kiếm, sắp xếp, tính toán, tối ưu hóa thao tác một cách thuần thục.</p>
                    <p>Bạn sẽ được học và thực hành từ các bài toán SQL trong mỗi bài học</p>

                </div>
            </div>
            <div
                style={{
                    width: "100vw",
                    marginLeft: "80px",
                }}
            >
                <h2>Nội dung khóa học</h2>
                <div 
                    style={{
                        width: "700px",
                        height: "500px",
                        marginLeft: "80px",
                        marginTop: "40px",
                        borderStyle: "solid",
                        borderColor: "black",
                        padding: "10px",
                        display:"auto",
                        overflow: "scroll",
                    }}
                >
                  
                    {SeeMore.map((w,index)=>{
                      return <Stack spacing={2} direction="row"
                              style={{
                                marginLeft: "20px",
                                marginTop: "10px",
                              }}
                            >
                              <div>{w.name}</div>
                              <div>{w.content}</div>
                            </Stack>
                    },
                    )}
                  
                  
                    

                </div>
            </div>
        </div>
        
        </div>
        
    );
  
  }
  
  export default SeeMore;

