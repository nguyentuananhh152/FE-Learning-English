import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

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

const search = () => {
  window.location.replace('/')
}

const test = () => {
  window.location.replace('/test')
}

const statistical = () => {
  window.location.replace('/statistical')
}

const history = () => {
  window.location.replace('/history')
}


export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Translate language English - VietNamese
          </Typography>
          <Button color="inherit" onClick={search}>Search</Button>
          <Button color="inherit" onClick={test}>Test</Button>
          <Button color="inherit" onClick={statistical}>Statistical</Button>
          <Button color="inherit" onClick={history}>History</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}