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
import { Input } from '@material-ui/icons';

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

  const toExercise = () => {
    window.location.replace('/Exercise')
  }
  
  const Course = () => {
    const[Course, setListLesson]=useState([])

    useEffect(()=> {
      const url = ``;
      fetch("http://localhost:8081/get-list-lesson?id=1")
          .then(res => res.json())
          .then((result) => {
              setListLesson(result);
              console.log(Course);
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
                display:"flex",
                flexDirection: "row",
            }}
        >
            <div 
                style={{
                    width: "20vw",
                    height: "100vh",
                    padding: "10px",
                    display:"auto",
                    overflowY: "scroll",
                }}
            >
                <h2>SQL Cơ bản</h2>
                {Course.map((w,index)=>{
                    return <Stack spacing={2} direction="row"
                            style={{
                            marginLeft: "10px",
                            marginTop: "10px",
                            }}
                        >
                            <Button
                                style={{
                                    color: "black",
                                }}
                            >{w.content}</Button>
                        </Stack>
                },
                )}
                
                
                

            </div>
            <div style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
            }}>
                <div
                    style={{
                        borderBottom: "solid",
                        borderBottomWidth: "1px",
                    }}
                >
                    <h2>Learn Query 1</h2>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <p>Nội dung 1</p>
                    <Button
                        style={{
                            color: "white",
                            backgroundColor: "#157EFB",
                            margin: "10px",
                        }}
                        onClick={toExercise}
                    >Bài Tập</Button>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "10px",
                    }}>
                        <Button
                            style={{
                                color: "white",
                                backgroundColor: "#157EFB",
                            }}
                        >Trước</Button>
                        <Button
                            style={{
                                color: "white",
                                backgroundColor: "#157EFB",
                                position: "absolute",
                                right: "0px", 
                            }}
                        >Tiếp theo</Button>

                    </div>
                </div>
                <div>
                    <h3>Đánh giá</h3>
                    <div
                        style={{
                            backgroundColor: "#D9D9D9",
                            marginRight: "10px",
                            padding: "10px",
                        }}
                    >
                    <Stack spacing={3} direction="row"
                    >
                        <AccountCircleIcon></AccountCircleIcon>
                        <p>UserName</p>
                    </Stack>
                    <p>Đánh giá của người dùng</p>
                    </div>
                    <div
                        style={{
                            marginTop: "10px",
                            backgroundColor: "#D9D9D9",
                            height: "100px",
                            marginRight: "10px",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <TextField
                            id="userComment"
                            className="text"
                            placeholder="Đánh giá về bài học..."
                            style={{
                                backgroundColor: "white",
                                display: "flex",
                            }}
                        />
                        <Button type='submit'
                        style={{
                            color: "white",
                            backgroundColor: "#157EFB",
                            position: "absolute",
                            right: "0px", 
                            margin: "10px",
                            
                        }}>Gửi</Button>
                    </div>
                </div>

            </div>
        </div>
        
        </div>
        
    );
  
  }
  
  export default Course;

